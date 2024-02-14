import { Injectable } from '@angular/core';
import { Toolbar, toDoc, toHTML } from 'ngx-editor';

@Injectable()
export class NgxEditorService {
  constructor() {}

  public getToolbar(): Toolbar {
    return [
      ['bold', 'italic'],
      ['underline', 'strike'],
      ['ordered_list', 'bullet_list'],
      [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
      ['link', 'image'],
      ['text_color'],
    ];
  }

  public transformEditorContentToHTML(content: any) {
    if (!content) {
      return '';
    } else if (typeof content === 'string') {
      return content;
    } else {
      return toHTML(content);
    }
  }

  public transformEditorContentToDoc(content: any) {
    if (typeof content === 'object') {
      return content;
    } else {
      return toDoc(content);
    }
  }
}