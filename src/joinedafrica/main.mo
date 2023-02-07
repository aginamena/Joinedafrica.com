import Trie "mo:base/Trie";
import Type "types";
import Posts "Posts";
import DatabaseStructure "DatabaseStructure";
import List "mo:base/List";
import Debug "mo:base/Debug";

actor Backend {

  type Category = Text;
  type Post = Type.Post;
  // type ViewCategory = Type.ViewCategory;
  // type Category = Type.Category;

  //categories stores all the posts categories
  var PublishedPosts : Posts.PublishedPosts = Posts.PublishedPosts();
  PublishedPosts.createDatabase(DatabaseStructure.Database);

  // public query func gets() : async Trie.Trie<CategoryName, Trie.Trie<CategoryName, List.List<Post>>> {
  //   return categories.get();
  // };
  // public query func get_all_subcategory_in_a_category(categoryName : CategoryName) : async [ViewCategory] {
  //   Debug.print(debug_show (categoryName));
  //   return categories.get_all_subcategory_in_a_category(categoryName);
  // };
  // public query func get_all_categories() : async [Category] {
  //   return PostCategory.joined_africa_category;
  // };
};
