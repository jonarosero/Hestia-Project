import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export const reverseTimer = (timer: number) => (source: Observable<number>) => {
    return source.pipe(map(v => timer - v));
};
