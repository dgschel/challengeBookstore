import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    imports: [MatToolbarModule, MatCardModule, MatButtonModule, MatInputModule, MatIconModule],
    exports: [MatToolbarModule, MatCardModule, MatButtonModule, MatInputModule, MatIconModule]
})
export class MaterialModule { }