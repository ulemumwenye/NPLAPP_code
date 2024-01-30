import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  posts: any[] = [];

  constructor(private http: HttpClient) {
    this.loadPosts();
  }

  loadPosts() {
    // Replace the URL with the actual endpoint for your posts
    const apiUrl = 'https://mwnation.com/wp-json/wp/v2/posts';

    this.http.get(apiUrl).subscribe((data: any) => {
      this.posts = data.map((post: any) => ({
        title: post.title,
        content: post.content,
        image: post.featured_media_src_url,
      }));
    });
  }
  
  }
}
