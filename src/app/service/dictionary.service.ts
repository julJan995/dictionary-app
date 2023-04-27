import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, of  } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface Phonetics {
  text: string;
  audio?: string;
}
export interface Definitions {
  definition: string;
  example: string;
  synonyms?: string[];
  antonym?: string[];
}
export interface Meanings {
  partOfSpeech: string;
  definictions: Definitions[];
}
export interface ApiResponse {
  word: string;
  phonetic: string;
  phonetics: Phonetics[];
  origin: string;
  meanings: Meanings[];
}

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  data?: ApiResponse;
  constructor(private httpClient: HttpClient) { }

  getWord(word: string): Observable<ApiResponse | { error: string; }> {
    const dictionaryUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    return this.httpClient.get<ApiResponse>(dictionaryUrl).pipe(
      catchError(error  => {
        console.log('Error occured', error);
        const errorMessage = "This word is not existing in the database.";
        return of({error: errorMessage});
      }),
      map((response: any) => {
       if (response instanceof Object && response.hasOwnProperty('error')) {
               throw new Error(response.error);
             }
             return response;
      })
    )
  }

  setData(data?: ApiResponse) {
    this.data = data;
  }

  getDataFromService() {
    return this.data;
  }
}
