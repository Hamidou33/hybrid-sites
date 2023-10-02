import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from "./errors/error.component";
import { SharedRoutingModule } from "./shared-routing.module";
import { TranslateModule } from "@ngx-translate/core";
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';

@NgModule({
    imports: [
        CommonModule,
        SharedRoutingModule
    ],
    exports: [
        LanguageSelectorComponent,
        TranslateModule
    ],
    declarations: [ErrorComponent, LanguageSelectorComponent]
})
export class SharedModule { }
