import Trie "mo:base/Trie";
import Type "types";
import Posts "Posts";
import DatabaseStructure "DatabaseStructure";
import List "mo:base/List";
import Debug "mo:base/Debug";
import MyPostings "MyPostings";

actor Backend {

  type Category = Text;
  type Post = Type.Post;
  type UserId = Type.UserId;
  type Profile = Type.Profile;

  //publishedPosts contains all published posts (visible to other users)
  var publishedPosts : Posts.PublishedPosts = Posts.PublishedPosts();
  publishedPosts.createDatabase(DatabaseStructure.Database);

  //myPostings contains all my private postings not yet published
  var myPostings : MyPostings.MyPostings = MyPostings.MyPostings();

  public shared ({ caller }) func createPost(post : Post) : async () {
    myPostings.createPost(post, caller);
  };
  public shared ({ caller }) func getAllMyPostings() : async [Post] {
    return myPostings.getAllMyPostings(caller);
  };
  //get the principal id of the caller
  public shared ({ caller }) func whoAmI() : async UserId {
    return caller;
  };

  //new users have to create their profile to gain more access to the site.
  public shared ({ caller }) func createUserProfile(profile : Profile) : async () {

  };
};
