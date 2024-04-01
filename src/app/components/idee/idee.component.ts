import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { NestService } from "../../shared/services/nest/nest.service";
import { Comments } from "../../shared/interfaces/comments";
import { BehaviorSubject, Observable, Subject, switchMap } from "rxjs";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { CommonModule } from "@angular/common";
import { DateFormatDirective } from "../../shared/directives/date-format.directive";
import { HeaderDeskopComponent } from "../../core/header/header-deskop/header-deskop.component";

@Component({
  selector: "app-idee",
  templateUrl: "./idee.component.html",
  styleUrls: ["./idee.component.css"],
  imports: [
    CommonModule,
    HeaderDeskopComponent,
    ReactiveFormsModule,
    TranslateModule,
    DateFormatDirective
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IdeeComponent implements OnInit {
  comments$: Observable<Comments[]>;
  commentForm: FormGroup;
  loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private commentsSubject: Subject<Comments[]> = new Subject<Comments[]>();

  constructor(translate: TranslateService, private formBuilder: FormBuilder, private nestService: NestService) {
    translate.setDefaultLang(localStorage.getItem("locale") || "fr");
    this.commentForm = this.initForm();
  }

  ngOnInit() {
    this.loading$.next(true);
    this.comments$ = this.commentsUpdated;
    this.nestService.fetchComments().subscribe({
        next: (comments: Comments[]) => {
          this.commentsSubject.next(comments);
          this.loading$.next(false);
        }, error: (err: string) => {
          this.commentsSubject.error(err);
          this.loading$.next(false);
        }
      }
    );
  }

  get commentsUpdated(): Observable<Comments[]> {
    return this.commentsSubject.asObservable();
  }

  initForm(): FormGroup {
    return this.formBuilder.group({
      name: ["", Validators.required],
      comment: ["", Validators.required]
    });
  }

  sendMessage() {
    this.loading$.next(true);
    if (this.commentForm.valid) {
      const newComment: Comments = {
        name: this.commentForm.value.name,
        comment: this.commentForm.value.comment,
        date: new Date().toString()
      };

      this.nestService.addComment(newComment).pipe(
        switchMap(() => this.nestService.fetchComments())
      ).subscribe({
        next: (comments: Comments[]) => {
          this.commentsSubject.next(comments);
          this.loading$.next(false);
          console.log("New comment added successfully");
        },
        error: (err: string) => {
          console.error("Error adding new comment:", err);
          this.loading$.next(false);
        }
      });
    }
  }

  deleteComment(commentId: number) {
    this.loading$.next(true);
    this.nestService.deleteComment(commentId).pipe(
      switchMap(() => this.nestService.fetchComments())
    ).subscribe({
      next: (comments: Comments[]) => {
        this.commentsSubject.next(comments);
        this.loading$.next(false);
        console.log("Comment deleted successfully");
      },
      error: (err: string) => {
        console.error("Error deleting comment:", err);
        this.loading$.next(false);
      }
    });
  }
}
