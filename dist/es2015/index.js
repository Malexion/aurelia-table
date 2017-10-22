
export * from './column-menu';
export * from './aurelia-table-filter';
export * from './aurelia-table';

export function configure(config) {
   config.globalResources(['./aurelia-table-filter', './aurelia-table']);
}