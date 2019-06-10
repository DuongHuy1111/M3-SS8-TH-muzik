import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  playlist = [
    {id: 'M8U7PR6fQNA', song: 'NHẠT - PHAN MẠNH QUỲNH [OFFICIAL MUSIC VIDEO]'},
    {id: 'HXkh7EOqcQ4', song: 'THẰNG ĐIÊN | JUSTATEE x PHƯƠNG LY | OFFICIAL MV'},
    {id: 'aGUQsb31TEw', song: 'BIGDADDY x EMILY - Mượn Rượu Tỏ Tình (Official M/V)'}
  ];

  constructor() {
  }

  find(id: string) {
    return this.playlist.find(item => item.id === id);
  }
}
