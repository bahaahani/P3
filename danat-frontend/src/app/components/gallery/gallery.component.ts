import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: 'gemstone' | 'pearl' | 'jewelry';
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'Natural Bahraini Pearl',
      description: 'A rare, natural pearl from the waters of Bahrain.',
      imageUrl: 'assets/images/gallery/bahraini-pearl.jpg',
      category: 'pearl'
    },
    {
      id: 2,
      title: 'Blue Sapphire',
      description: 'A stunning blue sapphire gemstone.',
      imageUrl: 'assets/images/gallery/blue-sapphire.jpg',
      category: 'gemstone'
    },
    {
      id: 3,
      title: 'Diamond Necklace',
      description: 'An exquisite diamond necklace designed by local artisans.',
      imageUrl: 'assets/images/gallery/diamond-necklace.jpg',
      category: 'jewelry'
    },
    // Add more gallery items here
  ];

  categories = ['all', 'gemstone', 'pearl', 'jewelry'];
  selectedCategory: string = 'all';

  filterGallery(category: string) {
    this.selectedCategory = category;
  }

  get filteredGalleryItems(): GalleryItem[] {
    return this.selectedCategory === 'all'
      ? this.galleryItems
      : this.galleryItems.filter(item => item.category === this.selectedCategory);
  }
}