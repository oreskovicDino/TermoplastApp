import { AdminEditComponent } from '../admin-side/edit-components/admin-edit/admin-edit.component';
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';


@Injectable()
export class PreventUnsavedAdminChanges implements CanDeactivate<AdminEditComponent> {
    canDeactivate(component: AdminEditComponent) {
        if (component.editForm.dirty) {
            return confirm('Jeste li sigurni da želite nastaviti? Any unsaved changes will be lost!');
        }
        return true;
    }
}

