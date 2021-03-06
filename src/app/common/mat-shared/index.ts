import { NgModule } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import {
    MatCommonModule,
    MatInputModule,
    MatStepperModule,
    MatButtonModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatProgressBarModule,
    MatTreeModule,
    MatTabsModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatLineModule,
    MatListModule,
    MatSortModule,
    MatBadgeModule,
    MatChipsModule,
    MatRadioModule,
    MatTableModule,
    MatDialogModule,
    MatOptionModule,
    MatRippleModule,
    MatSelectModule,
    MatSliderModule,
    MatDividerModule,
    MatSidenavModule,
    MatTooltipModule,
    MatGridListModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatBottomSheetModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatButtonToggleModule,
    MatPseudoCheckboxModule,
    MatProgressSpinnerModule,
} from '@angular/material';

const MAT_MODULES = [
    CdkTableModule,
    CdkTreeModule,
    MatCommonModule,
    MatInputModule,
    MatStepperModule,
    MatButtonModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatProgressBarModule,
    MatTreeModule,
    MatTabsModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatLineModule,
    MatListModule,
    MatSortModule,
    MatBadgeModule,
    MatChipsModule,
    MatRadioModule,
    MatTableModule,
    MatDialogModule,
    MatOptionModule,
    MatRippleModule,
    MatSelectModule,
    MatSliderModule,
    MatDividerModule,
    MatSidenavModule,
    MatTooltipModule,
    MatGridListModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatBottomSheetModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatButtonToggleModule,
    MatPseudoCheckboxModule,
    MatProgressSpinnerModule
]

@NgModule({
    imports: [
        ...MAT_MODULES
    ],
    exports: [
        ...MAT_MODULES
    ]
})
export class MatSharedModule { }
