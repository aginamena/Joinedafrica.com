import Trie "mo:base/Trie";
import Type "types";
import Util "util";
import PostCategory "joined_africa_category";
import List "mo:base/List";
import Debug "mo:base/Debug";

actor Backend {

  type CategoryName = Text;
  type Post = Type.Post;
  type ViewCategory = Type.ViewCategory;

  //categories stores all the posts categories
  var categories : Util.PostingCategory = Util.PostingCategory();
  categories.create_category(PostCategory.joined_africa_category);

  public query func gets() : async Trie.Trie<CategoryName, Trie.Trie<CategoryName, List.List<Post>>> {
    return categories.get();
  };
  public query func get_all_subcategory_to_a_category(categoryName : CategoryName) : async [ViewCategory] {
    Debug.print(debug_show (categoryName));
    return categories.get_all_subcategory_to_a_category(categoryName);
  };
};
