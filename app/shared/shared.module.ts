import {NgModule, ModuleWithProviders} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {CityPipe} from "./pipes/city.pipe";
import {CityValidatorDirective} from "./validation/city.validator";
import {RoundTrip} from "./validation/roundtrip.validator";
import {AsyncCityValidatorDirective} from "./validation/async-city.validator";
import {DateComponent} from "./date/date.component";
import {CustomPreloadingStrategy} from "./preload/custom-preloading.strategy";
import { AuthService } from '../auth/auth.service';
import { AuthGuard } from './auth.guard';
import { AuthChildGuard } from './auth-child.guard';

@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    declarations: [
        CityPipe,
        CityValidatorDirective,
        AsyncCityValidatorDirective,
        RoundTrip,
        DateComponent
    ],
    providers:  [
        AuthGuard,
        AuthService,
        CustomPreloadingStrategy,
        AuthChildGuard
    ],
    exports:[
        CityPipe,
        CityValidatorDirective,
        AsyncCityValidatorDirective,
        RoundTrip,
        DateComponent
    ]
})
export class SharedModule {
}