import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-gender-cards',
    templateUrl: './gender-cards.component.html',
    styleUrls: ['./gender-cards.component.sass']
})
export class GenderCardsComponent implements OnInit {

    genders: string[] = ['Accion', 'terror', 'romance', 'thriller', 'drama', 'seinen', 'shojo',
        'psicologico', 'sobrenatural', 'fantasia']
    constructor() {
        if (this.genders) {
            console.log('this.gender: ', this.genders);

        }
    }

    ngOnInit() {
    }


}
