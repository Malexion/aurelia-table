
import {bindable, computedFrom} from 'aurelia-framework';

export class AureliaTable {
	@bindable header = '';
	@bindable rows = [];
	@bindable maxHeight = 300;

	constructor() {
		this._scrollbarwidth = null;
	}

	get scrollBarWidth() {
		if(!this._scrollbarwidth) { // Calculate browsers scrollbar width once
			var inner = document.createElement('p');
			inner.style.width = "100%";
			inner.style.height = "200px";

			var outer = document.createElement('div');
			outer.style.position = "absolute";
			outer.style.top = "0px";
			outer.style.left = "0px";
			outer.style.visibility = "hidden";
			outer.style.width = "200px";
			outer.style.height = "150px";
			outer.style.overflow = "hidden";
			outer.appendChild (inner);

			document.body.appendChild (outer);
			var w1 = inner.offsetWidth;
			outer.style.overflow = 'scroll';
			var w2 = inner.offsetWidth;
			if (w1 == w2) 
				w2 = outer.clientWidth;

			document.body.removeChild (outer);

			this._scrollbarwidth = (w1 - w2);
		}
		return this._scrollbarwidth;
	}

	@computedFrom('rows', 'body', 'body.scrollHeight', 'body.clientHeight')
	get showScrollBar() {
		return this.body && (this.body.scrollHeight > this.body.clientHeight);
	}

	@computedFrom('maxHeight')
	get bodyHeight() {
		return this.maxHeight != 0 ? 'max-height: ' + this.maxHeight + 'px; overflow-y: auto;' : '';
	}
}