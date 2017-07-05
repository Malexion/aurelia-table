
import __ from 'iterate-js';

export class RowViewValueConverter {
    toView(array, filter, sort, map, startpage, endpage, pagesize, pagemode) {
        var temp = array;
        if(__.is.array(temp)) {
            if(__.is.set(filter))
                temp = __.filter(temp, filter);
            if(__.is.set(sort))
                temp = __.sort(temp, sort);
            if(__.is.set(map))
                temp = __.map(temp, map);
            if(pagemode && __.is.set(startpage) && __.is.set(endpage) && __.is.set(pagesize))
                temp = temp.slice(startpage * pagesize, endpage * pagesize);
        }
        return temp;
    }
}
