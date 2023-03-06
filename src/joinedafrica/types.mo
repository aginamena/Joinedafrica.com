import Principal "mo:base/Principal";
import Text "mo:base/Text";

module {
    // public type Post = {
    //     creationDateOfPost : Text;
    //     postId : Text;
    //     isPublished : Bool;
    //     images : [[Nat8]];
    //     category : Text;
    //     subcategory : Text;
    //     productTitle : Text;
    //     amount : Text;
    //     productDescription : Text;
    //     condition : Text;
    //     productSpecification : {
    //         //Remove the optional values that are null. From being saved in the database

    //         // specification for vehicles, electronics, mobile phones and tablets
    //         yearOfManufacture : Int;
    //         model : Text;
    //         nameOfManufacturer : Text;
    //         // specification for health and beauty
    //         gender : Text;
    //         // specification for houses and apartments for rent
    //         isFurnished : Bool;
    //         hasParkingSpace : Bool;
    //         durationOfRenting : Int;
    //         //land & plots for sale
    //         numberOfPlots : Int;
    //     };
    // };
    public type Post = {
        //general descriptions of every posts start from here
        creationDateOfPost : Text;
        postId : Text;
        isPublished : Bool;
        images : [[Nat8]];
        category : Text;
        subcategory : Text;
        productTitle : Text;
        amount : Nat;
        productDescription : Text;
        condition : Text;
        //very specific description of a post
        productSpecification : {
            #Vehicles : {
                Year_of_manufacture : Nat;
                Name_of_manufacturer : Text;
                Model : Text;
            };
            #Electronics : {
                Year_of_manufacture : Nat;
                Name_of_manufacturer : Text;
                Model : Text;
            };
            #Health_and_beauty : {
                Gender : Text;
            };
            #Mobile_phones_and_tables : {
                Year_of_manufacture : Nat;
                Name_of_manufacturer : Text;
                Model : Text;
            };
            #Properties : {
                #Houses_and_apartments_for_rent : {
                    Furnished : Bool;
                    Parking_space : Bool;
                    Duration_of_rent_in_months : Nat;
                };
                #Houses_and_apartments_for_sale : {
                    Furnished : Bool;
                    Parking_space : Bool;
                };
                #Land_and_plots_for_sale : Nat;
            };
            #Fashion : {
                Gender : Text;
            };
        };
    };

    public type Vehicles = {
        yearOfManufacture : Nat;
        nameOfManufacturer : Text;
        model : Text;
    };
    public type Electronics = {
        yearOfManufacture : Nat;
        nameOfManufacturer : Text;
        model : Text;
    };
    public type HealthAndBeauty = {
        gender : Text;
    };
    public type MobilePhonesAndTablets = {
        yearOfManufacture : Nat;
        nameOfManufacturer : Text;
        model : Text;
    };
    public type Property = {

    };

    public type Profile = {
        firstName : Text;
        lastName : Text;
        profilePicture : [Nat8];
        email : Text;
    };

    //the strucutre of how the posts are organised in the database
    public type Database = {
        name : Category;
        subcategory : [Subcategory];
    };

    //the structure of how the posts are viewed in the frontend
    public type ViewCategory = {
        name : Text;
        posts : [Post];
    };
    public type UserId = Principal;
    public type PostId = Text;
    public type Category = Text;
    public type Subcategory = Text;

};
