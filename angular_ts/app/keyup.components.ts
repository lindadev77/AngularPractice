/**
 * Created by lin on 2017/4/15.
 */
@Component({
    selector: 'key-up3',
    template: `
    <input #box (keyup.enter)="values=box.value">
    <p>{{values}}</p>
  `
})
export class KeyUpComponent_v3 {
    values = '';
}