import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatCheckboxModule, MatCardModule} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  imports: [MatButtonModule, MatButtonModule, MatCardModule, MatListModule, MatCheckboxModule,
    MatIconModule, MatGridListModule, MatTabsModule, MatDividerModule],
  exports: [MatButtonModule, MatButtonModule, MatCardModule, MatListModule, MatCheckboxModule,
    MatIconModule, MatGridListModule, MatTabsModule, MatDividerModule],
})
export class MaterialModule {
}
