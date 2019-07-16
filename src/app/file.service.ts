import { Injectable } from '@angular/core';
import { IpcRenderer } from 'electron';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private ipc: IpcRenderer

  constructor() { }
}
