import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { NestService } from "../../shared/services/nest/nest.service";
import { Comments } from "../../shared/interfaces/comments";
import { Observable } from "rxjs";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { CommonModule } from "@angular/common";
import { HeaderDeskopComponent } from "../home/header/header-deskop/header-deskop.component";
import { DateFormatDirective } from "../../shared/directives/date-format.directive";

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

  constructor(translate: TranslateService, private formBuilder: FormBuilder, private nestService: NestService) {
    translate.setDefaultLang(localStorage.getItem("locale") || "fr");
    this.commentForm = this.formBuilder.group({
      name: ["", Validators.required],
      comment: ["", Validators.required]
    });
  }

  ngOnInit() {
    this.comments$ = this.nestService.commentsUpdated;
    this.nestService.fetchComments();
  }

  sendMessage() {
    if (this.commentForm.valid) {
      const newComment: Comments = {
        name: this.commentForm.value.name,
        comment: this.commentForm.value.comment,
        date: new Date().toString()
      };

      this.nestService.addComment(newComment).subscribe({
          next: (v) => {
            console.log("New comment added successfully", v);
          }, error: (err: any) => {
            console.error("Error adding new comment:", err);
          }
        }
      );
    }
  }

  deleteComment(commentId: number) {
    this.nestService.deleteComment(commentId).subscribe({
        next: (v) => {
          console.log("Comment deleted successfully", v);
        },
        error: error => {
          console.error("Error deleting comment:", error);
        }
      }
    );
  }
}
