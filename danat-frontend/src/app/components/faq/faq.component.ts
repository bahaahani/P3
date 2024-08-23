import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FAQItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent {
  faqItems: FAQItem[] = [
    {
      question: 'What services does DANAT offer?',
      answer: 'DANAT offers a wide range of services including gemstone testing, pearl authentication, jewelry appraisal, and educational programs in gemology and pearl science.'
    },
    {
      question: 'How long does gemstone testing take?',
      answer: 'The duration of gemstone testing can vary depending on the type of stone and the tests required. Typically, it takes 1-3 business days for standard testing.'
    },
    {
      question: 'Are DANAT\'s certifications internationally recognized?',
      answer: 'Yes, DANAT\'s certifications are internationally recognized and respected in the gemological community.'
    },
    {
      question: 'Can I enroll in DANAT\'s educational programs if I\'m not from Bahrain?',
      answer: 'Absolutely! DANAT welcomes students from all over the world to participate in our educational programs.'
    },
    {
      question: 'How can I schedule an appointment for jewelry appraisal?',
      answer: 'You can schedule an appointment by contacting our customer service team via phone or email. Contact details can be found on our Contact page.'
    }
  ];

  expandedIndex: number | null = null;

  toggleExpand(index: number) {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }
}