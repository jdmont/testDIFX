import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'characters',
        loadChildren: 'src/app/modules/character/character.module#CharacterModule'
    },
    {
        path: 'students',
        loadChildren: 'src/app/modules/students/students.module#StudentsModule'
    },
    {
        path: 'teachers',
        loadChildren: 'src/app/modules/teachers/teachers.module#TeachersModule'
    },
    { path: '**', redirectTo: '' }
];



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
