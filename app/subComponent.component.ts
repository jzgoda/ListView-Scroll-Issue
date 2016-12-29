import {Component, ChangeDetectionStrategy, OnInit, Input} from "@angular/core";

@Component({
	selector: "sub-component",
	templateUrl: "subComponent.component.html",
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubComponentComponent implements OnInit {
	@Input() myItem: number;
	count: number = 0;

	ngOnInit(): void {
		this.count = this.myItem;
	}
}
