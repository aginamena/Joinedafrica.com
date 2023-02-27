import Trie "mo:base/Trie";
import Type "types";
import Posts "Posts";
import DatabaseStructure "DatabaseStructure";
import List "mo:base/List";
import Debug "mo:base/Debug";
import MyPostings "MyPostings";
import UserProfiles "UserProfiles";
import Result "mo:base/Result";

actor Backend {

  type Category = Text;
  type Post = Type.Post;
  type UserId = Type.UserId;
  type Profile = Type.Profile;
  type Result<T, E> = Result.Result<T, E>;

  /**
    All data structures 
  */

  //publishedPosts contains all published posts (visible to other users)
  var publishedPosts : Posts.PublishedPosts = Posts.PublishedPosts();
  publishedPosts.createDatabase(DatabaseStructure.Database);

  //myPostings contains all my private postings not yet published
  var myPostings : MyPostings.MyPostings = MyPostings.MyPostings();

  //users profile, includes create, deleting, searching, and editing profiles
  var userProfiles : UserProfiles.UserProfiles = UserProfiles.UserProfiles();

  /**
    The methods below are for user profiles
  */

  //new users have to create their profile to gain more access to the site.
  public shared ({ caller }) func createUserProfile(profile : Profile) : async Result<Profile, Text> {
    userProfiles.createUserProfile(profile, caller);
  };

  public shared ({ caller }) func getUserProfile() : async Result<Profile, Text> {
    return userProfiles.getUserProfile(caller);
  };

  /**
  The methods below are for my Postings. Only me can see.
*/
  public shared ({ caller }) func createPost(post : Post) : async () {
    myPostings.createPost(post, caller);
  };
  public shared ({ caller }) func getAllMyPostings() : async [Post] {
    return myPostings.getAllMyPostings(caller);
  };

  /**
    The methods below are test methods
  */
  //get the principal id of the caller
  public shared ({ caller }) func whoAmI() : async UserId {
    return caller;
  };

  //test function
  public func allPrincipals() : async [UserId] {
    userProfiles.allPrincipals();
  };
};
