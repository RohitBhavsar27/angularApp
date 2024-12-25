import { Component } from '@angular/core';
import { TitlePipe } from '../title.pipe';

@Component({
    selector: 'app-pipeex',
    imports: [TitlePipe],
    templateUrl: './pipeex.component.html',
    styleUrl: './pipeex.component.css'
})
export class PipeexComponent {
    mydate: Date = new Date()

}
