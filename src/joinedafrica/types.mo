import Principal "mo:base/Principal";
import Text "mo:base/Text";

module {
    public type Post = {
        creationDateOfPost : Text;
        postId : Text;
        isPublished : Bool;
        images : [[Nat8]];
        category : Text;
        subcategory : Text;
        productTitle : Text;
        amount : Text;
        productDescription : Text;
        condition : Text;
        productSpecification : {
            //Remove the optional values that are null. From being saved in the database

            // specification for vehicles, electronics, mobile phones and tablets
            yearOfManufacture : Int;
            model : Text;
            nameOfManufacturer : Text;
            // specification for health and beauty
            gender : Text;
            // specification for houses and apartments for rent
            isFurnished : Bool;
            hasParkingSpace : Bool;
            durationOfRenting : Int;
            //land & plots for sale
            numberOfPlots : Int;
        };
    };
    public type Post2 = {
        //general descriptions of every posts start from here
        creationDateOfPost : Text;
        postId : Text;
        isPublished : {
            #Yes;
            #No;
        };
        images : [[Nat8]];
        category : {
            #Electronics;
            #Vehicles;
            #Health_and_beauty;
            #Mobile_phones_and_tables;
            #Property;
            #Fashion;
        };
        subcategory : {
            #Vehicle : {
                #Cars;
                #Buses;
                #Trucks_and_trailers;
                #Vehicle_parts_and_assessories;
                #Motocycle;
            };
            #Electronics : {
                #Computers_and_laptops;
                #Electronic_supplies;
                #Audio_and_music_equipment;
                #Computer_accessories;
                #Radio_and_home_audio;
                #Tv_and_dvd_equipment;
            };
            #Health_and_beauty : {
                #Skincare;
                #Hair_products;
                #Bath_and_body;
                #Fragrances;
                #Vitamins_and_supplements;
            };
            #Mobile_phones_and_tables : {
                #Phones;
                #Tablet;
                #Accessories_for_mobile_phones_and_tablets;
            };
            #Property : {
                #Houses_and_apartments_for_rent;
                #Houses_and_apartments_for_sale;
                #Land_and_plots_for_sale;
            };
            #Fashion : {
                #Bags;
                #Clothing_and_clothing_accessories;
                #Jewelries;
                #Shoes;
            };
        };
        productTitle : Text;
        amount : Nat;
        productDescription : Text;
        condition : {
            #New;
            #Used;
        };
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
                #Gender : {
                    #Male;
                    #Female;
                    #Unisex;
                };
            };
            #Mobile_phones_and_tables : {
                Year_of_manufacture : Nat;
                Name_of_manufacturer : Text;
                Model : Text;
            };
            #Property : {
                #Houses_and_apartments_for_rent : {
                    #Furnished : {
                        #Yes;
                        #No;
                    };
                    #Parking_space : {
                        #Yes;
                        #No;
                    };
                    #Duration_of_rent_in_months : Nat;
                };
                #Houses_and_apartments_for_sale : {
                    #Furnished : {
                        #Yes;
                        #No;
                    };
                    #Parking_space : {
                        #Yes;
                        #No;
                    };
                };
                #Land_and_plots_for_sale : Nat;
            };
            #Fashion;
        };
    };

    public type Profile = {
        firstName : Text;
        lastName : Text;
        profilePicture : [Nat8];
        email : Text;
    };

    //the strucutre of how the posts are organised in the database
    public type Database = {
        name : Text;
        subcategory : [Text];
    };

    //the structure of how the posts are viewed in the frontend
    public type ViewCategory = {
        name : Text;
        posts : [Post];
    };
    public type UserId = Principal;
    public type PostId = Text;

};
