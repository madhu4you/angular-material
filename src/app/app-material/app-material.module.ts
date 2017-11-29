import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatChipsModule,
  MatDatepickerModule, MatDialogModule, MatExpansionModule, MatExpansionPanel, MatFormFieldModule,
  MatIconModule, MatInputModule, MatListModule, MatMenuModule,
  MatNativeDateModule, MatPaginatorModule, MatProgressSpinnerModule, MatRippleModule, MatSelectModule,
  MatSidenavModule, MatSlideToggleModule, MatSnackBarModule, MatTableModule, MatTabsModule,
  MatTooltipModule, NativeDateAdapter, MatToolbarModule
} from '@angular/material';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  providers: [NativeDateAdapter],
  entryComponents: [MatExpansionPanel],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatTableModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatSelectModule,
    MatCheckboxModule,
    OverlayModule,
    MatRippleModule,
    MatPaginatorModule,
    MatToolbarModule
  ]
})
export class AppMaterialModule {}
