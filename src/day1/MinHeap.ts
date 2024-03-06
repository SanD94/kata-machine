export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.data = [];
        this.length = 0;
    }

    insert(value: number): void {
        this.data[this.length] = value;
        this.heapify_up(this.length);
        this.length++;
    }

    delete(): number {
        if (this.length === 0) {
            return -1;
        }

        const out = this.data[0];
        this.length--;

        if (this.length === 0) {
            this.data = [];
            return out;
        }

        this.data[0] = this.data[this.length];
        this.heapify_down(0);

        return out;
    }


    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    private left_child(idx: number): number {
        return 2 * idx + 1;
    }

    private right_child(idx: number): number {
        return 2 * idx + 2;
    }


    private heapify_up(idx: number): void {
        if (idx === 0) {
            return;
        }

        const p = this.parent(idx);
        const p_v = this.data[p];

        const v = this.data[idx];

        if (p_v > v) {
            this.data[idx] = p_v;
            this.data[p] = v;
            this.heapify_up(p);
        }
    }

    private heapify_down(idx: number): void {
        const l_idx = this.left_child(idx);
        const r_idx = this.right_child(idx);

        if (idx >= this.length || l_idx >= this.length) {
            return;
        }

        const l_v = this.data[l_idx];
        const r_v = this.data[r_idx];
        const v = this.data[idx];

        if (l_v > r_v && v > r_v) {
            this.data[idx] = r_v;
            this.data[r_idx] = v;
            this.heapify_down(r_idx);
        } else if (r_v > l_v && v > l_v) {
            this.data[idx] = l_v;
            this.data[l_idx] = v;
            this.heapify_down(l_idx);
        }
    }
}
