import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { accountState } from "./account.route";
import { ActivateComponent } from "./activate/activate.component";
import { RegisterComponent } from "./register/register.component";
import { PasswordComponent } from "./password/password.component";
import { PasswordStrengthBarComponent } from "./password/password-strength-bar/password-strength-bar.component";
import { PasswordResetInitComponent } from "./password-reset/init/password-reset-init.component";
import { PasswordResetFinishComponent } from "./password-reset/finish/password-reset-finish.component";
import { SettingsComponent } from "./settings/settings.component";

@NgModule({
    imports: [SharedModule, RouterModule.forChild(accountState)],
    declarations: [
      ActivateComponent,
      RegisterComponent,
      PasswordComponent,
      PasswordStrengthBarComponent,
      PasswordResetInitComponent,
      PasswordResetFinishComponent,
      SettingsComponent,
    ],
  })
  export class AccountModule{}