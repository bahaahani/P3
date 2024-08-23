import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingService } from '../../services/loading.service';

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
export class GalleryComponent implements OnInit {
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
  isLoading = true;

  constructor(private loadingService: LoadingService) {}

  ngOnInit() {
    this.loadingService.setLoading(true);
    // Simulate loading time
    setTimeout(() => {
      this.isLoading = false;
      this.loadingService.setLoading(false);
    }, 1000);
  }

  filterGallery(category: string) {
    this.selectedCategory = category;
  }

  get filteredGalleryItems(): GalleryItem[] {
    return this.selectedCategory === 'all'
      ? this.galleryItems
      : this.galleryItems.filter(item => item.category === this.selectedCategory);
  }

  onImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.src = 'assets/images/placeholder.jpg'; // Replace with a placeholder image
    img.alt = 'Image not available';
  }
}