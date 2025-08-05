import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';

@Injectable()
export class PaginatorIntlService extends MatPaginatorIntl {
  override itemsPerPageLabel = 'Clienți pe pagină:';
  override firstPageLabel = 'Prima pagină';
  override lastPageLabel = 'Ultima pagină';
  override nextPageLabel = 'Pagina următoare';
  override previousPageLabel = 'Pagina anterioară';

  override getRangeLabel = (page: number, pageSize: number, length: number) => {
    return `Pagina ${page + 1} din ${Math.ceil(length / pageSize)}`;
  };
}
