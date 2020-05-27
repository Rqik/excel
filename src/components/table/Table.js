import { ExcelComponent } from '../../core/ExcelComponent';
import { createTable } from './tableTamplete';

export class Table extends ExcelComponent {
  static className = 'excel__tabel'
  toHTML() {
    return createTable()
  }
}