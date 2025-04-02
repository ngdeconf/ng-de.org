import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';

export interface FaqQuestion {
  question: string;
  answer: string;
}

export interface FaqSection {
  category: string;
  questions: FaqQuestion[];
}

export interface FaqData {
  title: string;
  sections: FaqSection[];
}

@Injectable({
  providedIn: 'root'
})
export class FaqService {
  private faqData = signal<FaqData | null>(null);
  private dataUrl = 'assets/faq-data.json';

  constructor(private http: HttpClient) {}

  /**
   * Loads FAQ data and sets the signal
   */
  loadFaqData(): Observable<FaqData> {
    return this.http
      .get<FaqData>(this.dataUrl)
      .pipe(tap(data => this.faqData.set(data)));
  }

  /**
   * Returns the FAQ data signal
   */
  getFaqData() {
    return this.faqData;
  }

  /**
   * Returns the FAQ sections
   */
  getFaqSections() {
    return this.faqData()?.sections || [];
  }
}
