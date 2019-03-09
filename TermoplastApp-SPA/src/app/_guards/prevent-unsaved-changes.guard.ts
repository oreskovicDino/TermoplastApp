import { AdminEditComponent } from './../admin-side/edit-components/admin-edit/admin-edit.component';
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { AdminBlogEditComponent } from '../admin-side/edit-components/admin-blog-edit/admin-blog-edit.component';

@Injectable()
export class PreventUnsavedChanges implements CanDeactivate<AdminBlogEditComponent> {
    canDeactivate(component: AdminBlogEditComponent) {
        if (component.editForm.dirty) {
            return confirm('Jeste li sigurni da želite nastaviti? Any unsaved changes will be lost!');
        }
        return true;
    }
}

