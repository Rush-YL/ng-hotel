import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ScenelistComponent } from './content/scenelist/scenelist.component';
import { SceneComponent } from './content/scene/scene.component';
import { LoginComponent } from './content/login/login.component';
import { ChangePasswordComponent } from './content/change-password/change-password.component';
import { MainPageComponent } from './content/main-page/main-page.component';
import { SideToggleService } from './services/side-toggle.service';
import { SceneListService } from './services/scene-list.service';
import { UserInfoService } from './services/user-info.service';
import { FastTrackService } from './services/fast-track.service';
import { SceneInfoService } from './services/scene-info.service';
import { MainServiceService } from './services/main-service.service';
import { RoomServiceService } from './services/room-service.service';
import { ReservelistService } from './services/reservelist.service';
import { GoodsService } from './services/goods.service';
import { HtmlPipe } from './modules/innerhtml.pipe.module';
import { ReserveComponent } from './content/reserve/reserve.component';
import { ReceptionComponent } from './content/reception/reception.component';
import { CashComponent } from './content/cash/cash.component';
import { ProtocolComponent } from './content/protocol/protocol.component';
import { GuestroomComponent } from './content/guestroom/guestroom.component';
import { FinanceComponent } from './content/finance/finance.component';
import { ReservelistComponent } from './content/reservelist/reservelist.component';
import { NewreservationComponent } from './content/newreservation/newreservation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SuccessComponent } from './tips/success/success.component';
import { PreorderComponent } from './content/preorder/preorder.component';
import { OrderDetailComponent } from './content/order-detail/order-detail.component';
import { ConfirmOrderComponent } from './content/confirm-order/confirm-order.component';
import { MoreActionComponent } from './content/more-action/more-action.component';
import { CreditComponent } from './content/credit/credit.component';
import { PrintComponent } from './content/print/print.component';
import { CardComponent } from './content/card/card.component';
const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: ScenelistComponent },
  { path: 'scene/:id', component: SceneComponent },
  { path: 'index', component: MainPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'password', component: ChangePasswordComponent },
  { path: 'reserve', component: ReserveComponent },
  { path: 'newreservation/:id', component: NewreservationComponent },
  { path: 'reservelist', component: ReservelistComponent },
  { path: 'reception', component: ReceptionComponent },
  { path: 'confirm', component: ConfirmOrderComponent},
  { path: 'detail/:id', component: OrderDetailComponent},
  { path: 'cash', component: CashComponent },
  { path: 'protocol', component: ProtocolComponent },
  { path: 'preorder/:id', component: PreorderComponent},
  { path: 'moreacts', component: MoreActionComponent},
  { path: 'guestroom', component: GuestroomComponent },
  { path: 'finance', component: FinanceComponent },
  { path: 'credit', component: CreditComponent},
  { path: 'print', component: PrintComponent},
  { path: 'card', component: CardComponent},
  { path: '**', component: ScenelistComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    SidebarComponent,
    SceneComponent,
    ScenelistComponent,
    LoginComponent,
    ChangePasswordComponent,
    MainPageComponent,
    HtmlPipe,
    ReserveComponent,
    ReceptionComponent,
    CashComponent,
    ProtocolComponent,
    GuestroomComponent,
    FinanceComponent,
    ReservelistComponent,
    NewreservationComponent,
    SuccessComponent,
    PreorderComponent,
    OrderDetailComponent,
    ConfirmOrderComponent,
    MoreActionComponent,
    CreditComponent,
    PrintComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot()
  ],
  providers: [
    SideToggleService,
    SceneListService,
    UserInfoService,
    FastTrackService,
    SceneInfoService,
    MainServiceService,
    RoomServiceService,
    ReservelistService,
    GoodsService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
