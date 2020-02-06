import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {HttpClientModule} from '@angular/common/http';
import {APP_INITIALIZER, Injector, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MAT_DATE_LOCALE, MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSliderModule} from '@angular/material/slider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoadClickModule, SanitizeModule} from '@jaspero/ng-helpers';
import {FirebaseModule} from '../../integrations/firebase/fb.module';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ELEMENTS} from './elements/elements.const';
import {DashboardComponent} from './modules/dashboard/dashboard.component';
import {LoginComponent} from './modules/login/login.component';
import {SnippetDialogComponent} from './modules/module-definition/components/snippet-dialog/snippet-dialog.component';
import {ModuleDefinitionComponent} from './modules/module-definition/module-definition.component';
import {DefinitionInstanceComponent} from './modules/module-definition/pages/definition-instance/definition-instance.component';
import {DefinitionOverviewComponent} from './modules/module-definition/pages/definition-overview/definition-overview.component';
import {FieldComponent} from './modules/module-instance/components/field/field.component';
import {AutocompleteComponent} from './modules/module-instance/components/fields/autocomplete/autocomplete.component';
import {CheckboxComponent} from './modules/module-instance/components/fields/checkbox/checkbox.component';
import {ChipsComponent} from './modules/module-instance/components/fields/chips/chips.component';
import {DateFieldComponent} from './modules/module-instance/components/fields/date-field/date-field.component';
import {DraggableListComponent} from './modules/module-instance/components/fields/draggable-list/draggable-list.component';
import {FileComponent} from './modules/module-instance/components/fields/file/file.component';
import {GalleryComponent} from './modules/module-instance/components/fields/gallery/gallery.component';
import {ImageComponent} from './modules/module-instance/components/fields/image/image.component';
import {InputComponent} from './modules/module-instance/components/fields/input/input.component';
import {RadioComponent} from './modules/module-instance/components/fields/radio/radio.component';
import {SelectComponent} from './modules/module-instance/components/fields/select/select.component';
import {SliderComponent} from './modules/module-instance/components/fields/slider/slider.component';
import {TextareaComponent} from './modules/module-instance/components/fields/textarea/textarea.component';
import {ToggleComponent} from './modules/module-instance/components/fields/toggle/toggle.component';
import {WysiwygComponent} from './modules/module-instance/components/fields/wysiwyg/wysiwyg.component';
import {SegmentComponent} from './modules/module-instance/components/segment/segment.component';
import {AccordionComponent} from './modules/module-instance/components/segments/accordion/accordion.component';
import {CardComponent} from './modules/module-instance/components/segments/card/card.component';
import {EmptyComponent} from './modules/module-instance/components/segments/empty/empty.component';
import {StepperComponent} from './modules/module-instance/components/segments/stepper/stepper.component';
import {TabsComponent} from './modules/module-instance/components/segments/tabs/tabs.component';
import {SortDialogComponent} from './modules/module-instance/components/sort-dialog/sort-dialog.component';
import {ModuleInstanceComponent} from './modules/module-instance/module-instance.component';
import {InstanceOverviewComponent} from './modules/module-instance/pages/instance-overview/instance-overview.component';
import {InstanceSingleComponent} from './modules/module-instance/pages/instance-single/instance-single.component';
import {ColumnPipe} from './modules/module-instance/pipes/column.pipe';
import {ShowFieldPipe} from './modules/module-instance/pipes/show-field.pipe';
import {ResetPasswordComponent} from './modules/reset-password/reset-password.component';
import {SettingsComponent} from './modules/settings/settings.component';
import {ConfirmationComponent} from './shared/components/confirmation/confirmation.component';
import {ExportComponent} from './shared/components/export/export.component';
import {ImportComponent} from './shared/components/import/import.component';
import {JsonEditorComponent} from './shared/components/json-editor/json-editor.component';
import {LayoutSettingsComponent} from './shared/components/layout-settings/layout-settings.component';
import {LayoutComponent} from './shared/components/layout/layout.component';
import {SearchInputComponent} from './shared/components/search-input/search-input.component';
import {DropzoneDirective} from './shared/directives/dropzone/dropzone.directive';
import {ForceDisableDirective} from './shared/directives/force-disable/force-disable.directive';
import {MathPipe} from './shared/pipes/math/math-pipe.';
import {MatProgressBarModule} from '@angular/material';
import {FilterDialogComponent} from './modules/module-instance/components/filter-dialog/filter-dialog.component';
import {CompiledFormComponent} from './shared/components/compiled-form/compiled-form.component';
import {FilterTagsComponent} from './shared/components/filter-tags/filter-tags.component';
import {appInit} from './shared/utils/app-init';
import {TranslocoRootModule} from './transloco-root.module';

export function init(injector: Injector) {
  return () => {
    return appInit(injector);
  };
}

const PAGES = [
  ModuleDefinitionComponent,
  ModuleInstanceComponent,
  InstanceSingleComponent,
  InstanceOverviewComponent,
  DefinitionOverviewComponent,
  DefinitionInstanceComponent,
  SettingsComponent,
  DashboardComponent,

  LoginComponent,
  ResetPasswordComponent
];

const COMPONENTS = [
  SearchInputComponent,
  JsonEditorComponent,
  LayoutComponent,
  ImportComponent,
  CompiledFormComponent
];

const ENTRY_COMPONENTS = [
  // Fields
  FieldComponent,
  ConfirmationComponent,
  InputComponent,
  SelectComponent,
  ImageComponent,
  GalleryComponent,
  ToggleComponent,
  CheckboxComponent,
  DateFieldComponent,
  SliderComponent,
  WysiwygComponent,
  DraggableListComponent,
  RadioComponent,
  ChipsComponent,
  TextareaComponent,
  AutocompleteComponent,
  FileComponent,

  // Segments
  SegmentComponent,
  CardComponent,
  EmptyComponent,
  AccordionComponent,
  TabsComponent,
  StepperComponent,

  // Additional
  ExportComponent,
  SortDialogComponent,
  FilterDialogComponent,
  FilterTagsComponent,
  LayoutSettingsComponent,
  SnippetDialogComponent
];

const DIRECTIVES = [ForceDisableDirective, DropzoneDirective];

const PIPES = [ColumnPipe, ShowFieldPipe, MathPipe];

@NgModule({
  declarations: [
    AppComponent,
    ...PAGES,
    ...COMPONENTS,
    ...ENTRY_COMPONENTS,
    ...DIRECTIVES,
    ...PIPES,
    ...ELEMENTS,
  ],
  entryComponents: [
    ...ENTRY_COMPONENTS,
    ...ELEMENTS
  ],
  imports: [
    /**
     * Replace with another implementation
     * if necessary
     */
    FirebaseModule.forRoot(),

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

    // Material
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatTableModule,
    MatSortModule,
    MatSnackBarModule,
    MatMenuModule,
    MatDialogModule,
    MatListModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatSelectModule,
    PortalModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    DragDropModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatChipsModule,
    MatBottomSheetModule,
    MatProgressBarModule,

    // Ng Helpers
    LoadClickModule,
    SanitizeModule,
    TranslocoRootModule
  ],
  providers: [
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'en-US'
    },
    {
      provide: APP_INITIALIZER,
      useFactory: init,
      deps: [Injector],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
