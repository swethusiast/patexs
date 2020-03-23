import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CareersComponent } from './careers/careers.component';
import { JobComponent } from './careers/job/job.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'careers', component: CareersComponent },
    { path: 'careers/:id', component: JobComponent },
    { path: 'our-services', component: ServicesComponent },
    { path: 'our-services/:id', component: JobComponent },
    { path: 'contact-us', component: ContactComponent },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
})
export class PagesRoutingModule {}
