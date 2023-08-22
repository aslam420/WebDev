Topics :
1) OOPS Language Basics
2) SOLID Principles (OOPS Kaise lagae) -> Related to class design
3) 23 Design Patterns (For Architectural Problems)
4) HLD (Related to application design)
    -> Queues
    -> DB
    -> Load Balancer
    -> Vertical
    -> Horizontal
    etc...

OOPS Topics :
1) Classes and Objects (Encapsulation)
    -> Person
    -> Reference vs Instance
    -> Swap1 - p1 & p2 swap via temp
    -> Swap2 - p1 & p2 swap via properties
    -> Games in Swap2 - new p1 & p2
2) Miscellaneous
    Static & Non-Static - BankAccount Story
        -> static vs non-static data members
        -> static functions - no "this", only static data members
        -> non-static functions - this, all data members
    final - variables and data members
    Object creation - steps. this, this chaining
        -> Space allocation - java defaults
        -> Parsing - Non-Dynamic class creator Defaults
        -> Default constructor - Dynamic class creator defaults
        -> Parametrized Constructor - Class user Defaults
    Inheritance and Polymorphism
        -> P, C - all cases except abstract and final
----------------------------------------------------------------------------------
        -> super and override, constructor chaining
        -> access modifiers - private, public, default, protected
        -> inheritance and static functions
    Abstract & final - functions, class
    inheritance - comparator, comparable, iterator, iterable, toString, equals, hashcode
    Jargon - encapsulation, data hiding, abstraction, inheritance, polymorphism

Extra -
    -> generics & overloading
    -> exceptions & namespaces
----------------------------------------------------------------------------------

Encapsulation - Ek class banayi jaegi aur uss class k andr data members + functions saath m rehte h (The process of creating classes, putting data members + functions in an class)

Difference between class and object -
class wo chij h jisse object banayi jaati hai
Student doing -
    (a) Activities (functions)
    (b) marks, roll no , height (data members)
Realworld entities does activities as well as has features like height, weight etc...

Jb hum class banaenge to uske saare features ko data member bana dnge aur uski activities ko function bana denge. OOPs se pehle aise ni hota tha, pehle saare function pade rehte the chahe wo ek se jyda entity ka ho aur sbka data v khulla pda hoga jisse confusion hota tha ki ye data kis entity ko bleong krta hai. To OOPS humko better structure provide krta hai, aur reallife problems ko programming world m laane ka.

LLD means how to organize classes to solve different different problems.
HLD is realted tp architecture problems, means how to solve architecture prblems.

Pehli class bananege jisse hum person aur object m fark jaanenge -
Person -
    (a) int age
    (b) String name
    (c) void sayHi()

impport java.io.*;
import.java.util.*;

class Main {
    static class Person{
        int age;
        String name;

        void sayHi() {
            System.out.println(this.name + "[" + this.age + "] says hi.");
        }
    }

public static void main(String [] args) throws NumberFormatException, IOException{
    }
}

Person P1 likhne se object ya instance nhi bana. But jb hum krnge aur usko 2 property denge -
Person p1 = new Person();
p1 age = 10;
p1.name = "A";

class Main {
    static class Person{
        int age;
        String name;

        void sayHi() {
            System.out.println(this.name + "[" + this.age + "] says hi.");
        }
    }

public static void main(String [] args) throws NumberFormatException, IOException{
    Person p1 = new Person();
p1 age = 10;
p1.name = "A";
    }
}

So, new Person krne se 'instance/object' bana. Aur ye p1 reference to instance/object h.
Ab hum likhnege - p1.sayHi()

class Main {
    static class Person{
        int age;
        String name;

        void sayHi() {
            System.out.println(this.name + "[" + this.age + "] says hi.");
        }
    }

public static void main(String [] args) throws NumberFormatException, IOException{
    Person p1 = new Person();
p1 age = 10;
p1.name = "A";
p1.sayHi();
    }
}

Output : A[10] says Hi.

Let's say ek aur reference le k ek aur object banate h -
class Main {
    static class Person{
        int age;
        String name;

        void sayHi() {
            System.out.println(this.name + "[" + this.age + "] says hi.");
        }
    }

public static void main(String [] args) throws NumberFormatException, IOException{
    Person p1 = new Person();
    p1 age = 10;
    p1.name = "A";
    p1.sayHi();

  Person p2 = new Person();
    p2 age = 10;
    p2.name = "B";
    p2.sayHi();
    }
}

Output : 
A[10] says Hi.
B[10] says Hi.

But agar hum likhe -
Person p3 = p2;
Yaha instance/object ni bana h, sirf reference bana h. So, we can say instance/object is same but reference is different. Aur agar p3.sayHi() call kre to wo v p2 wali baat bolega -
class Main {
    static class Person{
        int age;
        String name;

        void sayHi() {
            System.out.println(this.name + "[" + this.age + "] says hi.");
        }
    }

public static void main(String [] args) throws NumberFormatException, IOException{
    Person p1 = new Person();
    p1 age = 10;
    p1.name = "A";
    p1.sayHi();

  Person p2 = new Person();
    p2 age = 10;
    p2.name = "B";
    p2.sayHi();

    Person p3 = p2;
    p3.sayHi();
    }
}

Output : 
A[10] says Hi.
B[10] says Hi.
B[10] says Hi.

Ab agar hum p2 ka naam badal de to p3 ka v naam badal jaega lekin q?
Qki p2 and p3 alag alag h hi ni, wo to memory m same hai -
class Main {
    static class Person{
        int age;
        String name;

        void sayHi() {
            System.out.println(this.name + "[" + this.age + "] says hi.");
        }
    }

public static void main(String [] args) throws NumberFormatException, IOException{
    Person p1 = new Person();
    p1 age = 10;
    p1.name = "A";
    p1.sayHi();

  Person p2 = new Person();
    p2 age = 10;
    p2.name = "B";
    p2.sayHi();

    Person p3 = p2;
    p3.sayHi();

    p2.name = "C";
    p2.sayHi();
    p3.sayHi();
    }
}

Output : 
A[10] says Hi.
B[10] says Hi.
B[10] says Hi.
C[10] says Hi.
C[10] says Hi.

Note : p1.sayHi() likte h to output will be - A[10] say Hi.
But sayHi() k andar kuch paas kiye ni to apne aap output kaise aa gya. Ye hota h jb kisi object ya referenc to an object pr function pass krte h to 'this' apne aap ho jaata hai.

Note : Person p2 = new Person();
Isme new reference ban rha h i.e. p2. 5k ek address bna heap m aur 5k (p2) ka reference bn gya stack m. To jb hum p2.name = "B"; krte hai to through reference Person ka name = "B" ho gya in heap. Means through reference internally 'this' kaam krne lg rha.

So, heap m instance 2 h -
(a) age [4k]
(b) name [4k]
(c) age [5k address]
(d) name (5k)
Stack m 2 h -
(a) p1 (reference1)
(b) p2 (reference2)
Through this reference/indicator we are chganging the values of an object

Now Person p3 = p2;
Isme stack k andr p2 wala 5k (instance address) ko p3 v copy kr lega, aur agar p2 change krnge to p3 v change hoga. So, these p1, p2 are simply references which are indicating a particular instance address.
Yha instance 2 h lekin reference 3 h. So, we can say heap memory k andr instance address hota hai aur uska address stack k andr hota h.

Kya reference sirf stack m hi hota h heap m ni?
Heap m v hota hai.

import java.io.*;
import java.util.*;

class Main() {
    static class Point() {
        int x;
        int y;
    }

    static class Rectangle {
        Point tl;
        Point br;
    }

    public static void main(String[] args) throws NumberFormatException, IOException {
        Rectangle r = new Rectangle(); /instance, ref (stack m stored stack)
        r.tl = new Point(); /instance, ref (heap m stored ref)
        r.tl.x = 2;
        r.tl.y = 6;

        r.br = new Point(); /instance, ref (heap m stored ref)
        r.br.x = 6;
        r.br.y = 1;
    }
}

Heap k ref stack m stored hote h lekin heap k ref heap m v stored kr skte hai.
Note : 'this' is also a reference

Integer vs int :
Integer i = 10;
int i = 10;
int 'i' = 10 heap m object store krti h aur uska address stack m store krti h as a reference.
Integer 

Note : Heap m memory tbtk rehti h jbtk stack m unka reference rehta hai. Fir Garbage Collector aa k memory clean kr dega.

-------------------------------------
Swap1 - p1 & p2 swap via temp
Swap2 - p1 & p2 Swap via properties
Games in Swap2 - new p1 & p2
--------------------------------------
class Main {
    static class Person{
        int age;
        String name;

        void sayHi() {
            System.out.println(this.name + "[" + this.age + "] says hi.");
        }
    }

public static void main(String [] args) throws NumberFormatException, IOException{
    Person p1 = new Person();
    p1 age = 10;
    p1.name = "A";
    p1.sayHi();

  Person p2 = new Person();
    p2 age = 10;
    p2.name = "B";
    p2.sayHi();

    Person temp = p1;
    p2 = temp;

    p1.sayHi();
    p2.sayHi();
    }
}

Swap hoga ya nhi?
 Yes! Do memory diagram in copy

class Main {
    static class Person{
        int age;
        String name;

        void sayHi() {
            System.out.println(this.name + "[" + this.age + "] says hi.");
        }
    }

public static void main(String [] args) throws NumberFormatException, IOException{
    Person p1 = new Person();
    p1 age = 10;
    p1.name = "A";
    p1.sayHi();

  Person p2 = new Person();
    p2 age = 10;
    p2.name = "B";
    p2.sayHi();

    swap(p1, p2)

    p1.sayHi();
    p2.sayHi();
    }
    static void swap(Person a, Person B) {
        Person t = a;
        a = b;
        b = t;
    }
}

Agar ye swap function m krte to kya hota?
No! Do memory diagram
Note : function se swap ni krwa skte but property se krwa skte h.

Swap by Property : (Means property utha k badal diye)
class Main {
    static class Person{
        int age;
        String name;

        void sayHi() {
            System.out.println(this.name + "[" + this.age + "] says hi.");
        }
    }

public static void main(String [] args) throws NumberFormatException, IOException{
    Person p1 = new Person();
    p1 age = 10;
    p1.name = "A";
    p1.sayHi();

  Person p2 = new Person();
    p2 age = 10;
    p2.name = "B";
    p2.sayHi();

    swap(p1, p2)

    p1.sayHi();
    p2.sayHi();
    }
    static void swap(Person a, Person b) {
       int tage = a.age;
       a.age = b.age;
       b.age = tage;

        String tname = a.name;
        a.name = b.name;
        b.name = tname;
    }
}
Note : String is immutable but String ka reference is mutable.
Note : In Java, we have only pass by value. (by address and not directly by stored object)
call by value : p1 = 4k
call by ref : p1 = 2000

Miscellaneous :
---------------
Static & Non-Static - BankAccount story
    static vs non-static data members
    static functions - no "this", only static data members
    non-static functions - this, all data members

Note : Here we will cover everything except static class
Static 3 jagha lag sakta h -
1) Function k saamne
2) Data Member k saamne
3) Class k saamne ( We will do later)

static data member :
Kb static use kiya jaata h?
Static ka purpose kya hota hai?

import java.io.*;
import java.util.*;

class Main {

    static class BankAccount {
        int anum;
        int money;
        static int roi; //rate of interest

        void announce() {
            System.out.println(this.anum + ", " + this.money + ", " + roi);
        }
    }

    public static void main(String[] args) throws NumberFormatException, IOException {
        BankAccount a1 = new BankAccount();
        a1.anum = 10;
        a1.money = 100;
        //BankAccount.roi = 4;
        a1.roi = 4;

        a1.announce();

        BankAccount a2 = new BankAccount();
        a2.anum = 11;
        a2.money = 110;
        //BankAccount.roi = 5;
        a2.roi = 5; -> a1 ki roi v change ho jaegi

        a2.announce();
        a1.announce();
    }
}

Isse ye hota h ki static wale data member object ko belong hi nhi krte. Ye ek class h jisme ek data member humne static banaya h.
Aur yha rate of interest 'roi' a1 se belong hi ni krna chaiye. roi static h to class k naam se set krna chaiye -
BankAccount.roi = 4;
So, anum or money object ko belong krte h aur static wale data member class ko belong krta hai.
Ab humne ek aur BankAccount banaya -
BankAccount a2 = new BankAccount();
a2.anum = 11;
a2.money = 110;
BankAccount.roi = 5;
But hum isse a2 se v change kr skte h. Agar hum isse a2 se change kiye to a1 ki v change ho jaegi.

Hum ek function bana lete h -
void announce() {
    System.out.println(this.anum + ", " + this.money + ", " + this.roi);
}
Note : Static k saamne this ni laga skte. But data member k saamne lga skte h

Ab a1.announce() krnge ki humein detail do. Fir a1 & a2 dono ko announce krnge. 
a1.announce();
a2.announce();
Isse kya hoga?
a1.announce(); kya kreag?
-> 10, 100, 4
a2.announce() kya krega?
-> 11, 110, 5
Lekin iske baad ab a1 ko krnge to uska roi =5 ho chuka hoga
-> 10, 100, 5

Aisa change q hua? a1 = 5; kaise hua?
So, static data member class ko belong krte hai. To jb ye 'main' start hua to 'main' start hone se pehle ek BankAccount class ban gya aur iske andr anum or money or roi rehta hai (let's consider uska address 10k h) aur announce() ki body v wahi pdi hua h. Ab 'main' chalne start hua, yha humne likha -
BackAccount a1 = new BankAccount();
To a1 ek new BankAccount ban gya. Ab jo non-static wale h an (anum, money) uske liye ek space object m bana diya (heap) lekin roi static h means wo class ko belong krta hai to uske liye heap m space hi nhi banaya. So, stack m a1 m 4k store ho gya aur har object k paas apni class ka address hota hai jo batata h meri class ye h.
Ab a1.anum = 10; kiya to heap k andr object m anum = 10; ho gya ab money = 100; kiya to 100 ho gya. Ab a1 ka roi =4; kr rhe to pehle se warnong milegi (error ni milegi) qki object m roi h hi nhi to kaise set kr skte h. Ab 10 m dekhega roi to yha h, to ye 10k m dkhega roi to yha pe h to waha jaa k roi = 10; kr dega. Fir ab announe() krnge to -
this.anum = 10;
this.money = 100;
this.roi = 4; class m jaa k print hoga

Ab wapas jaenge next line pr -
BankAccount a2 = new BankAccount();
Fir se new object ban gya 5k par jiske andr apna anum, money h but roi ni h. 
Ab a2.anum = 11; , a2.money = 110;, an a2. roi = 5; set kiye to stack m jaa k roi = 5 kr diya. But yha a1.roi ka v value 5 ho gya. Means jitne ka object bane sbka roi = 5; ho gya. Yha v ek value milegi ki hum object se change kr rhe h jbki ye class ki property h, aur class ki property class se change krni chaiye taaki dekh k hi clear ho ki saare object ek saath badal jaenge.
Ab job a1.annoucne() krnge to -
anum = 11,
money = 110, //ye dono object se uthaega 
roi = 5; updated wala uthaega 5
So, actually ye lines humne likhi hi galat tarike se h-
a1.roi = 4;
a2.roi = 5;
Humein kaise likhna hi ki warning naa de?
BankAccount.roi = 4; //Isse clear ho jaat h ki class m change kr rhe h. 
Note : Upar wale code sb bad practice h

Kya static data member ko object k naam se change kiya jaa skta hai?
Yes! Lekin wo bad practice maana jaata h qki koi code ko pdhega to usee lgega ki isse koi impact ni aaega lekin isse saare roi k object ka value change ho jaega latest update se.
//Read once Venkatesh Notes from OneNote and practice.

final - variables and data members
Object creation - steps, this, this chaining
    Space allocation - java Defaults
    Parsing - Non-Dynamic class creator Defaults
    Default constructor - Dynamic class creator Defaults
    Parametrized constructor - Class user Defaults
Inheritance and Polymorphism
    P, C - all cases except abstract and final



---------------------------------------------------------------------------------------
Today's Topic :
1) Static Functions & Data Members
2) Inheritance & Polymorphism
3) Object Creation [Parsing & Constructor]

Humein 3 jagha static ka use aaega -
(a) static data member kya hota  h?
(b) Static Function kya hota h?
(c) Static class kya hoti h?

Static Data Member : (Meaning, Implication, Warning)
Implication - Class k andar koi data member h static to usko use krne k liye koi object banane ki jarurat ni h qki ye object ko belong hi nhi krta. Actually it belongs to the entire class or all the objects
[No object required (belongs to the entire class)]
-> To uss tarah ki chije to saare objects k liye common honi chaiye to usko hum static bana dete h
For example, BankAccount
import java.io.*;
import java.util.*;

class Main {

    static class BankAccount {
        int anum;
        int money;
        static int roi; //rate of interest

        void announce() {
            System.out.println(this.anum + ", " + this.money + ", " + roi);
        }
    }

    public static void main(String[] args) throws NumberFormatException, IOException {
        BankAccount a1 = new BankAccount();
        a1.anum = 10;
        a1.money = 100;
        //BankAccount.roi = 4;
        a1.roi = 4; //bad practice (static data members should be modified using class and not object)

        a1.announce();

        BankAccount a2 = new BankAccount();
        a2.anum = 11;
        a2.money = 110;
        //BankAccount.roi = 5;
        a2.roi = 5; -> a1 ki roi v change ho jaegi

        a2.announce();
        a1.announce();
    }
}

Ab agar BankAccount class k liye dekhe to usme h Account Number, but humein pta h Account Number static rkhne ki chij nhi h
-> int anum; -> har ek ka alag alag account number hota h, so jitne object bananenge sbka ccount number alag hona chaiiye
-> int money -> ab alag alag account number m paise v alag-alag honge to ye v static rkhne ki chij ni h
-> static int roi -> Lekin ek bank k andr rate of interest sbka same h for saving account. To agar sbka roi same h aur ye property sbke andr rkhnge to space ka wastage h, aur agar kvi roi change krna pda to sb object m alag alag jaa k change krna pdega.
    -> Space wastage
    -> Time Complex
Isliye jis chij ko static bana dete h wo class se kvi object m aata hi nhi, wo class m hi rehta h.
Infact, anum, money ko hum object se change krte h but static wali property k object ko v change kr skte h but this is a bad practice, so humein static data member ko class ka naam le k change krna chaiye qki jisne class ni dekhi aur wo iss code ko dekhega -
    BankAccount a1 = new BankAccount();
        a1.anum = 10;
        a1.money = 100;
        //BankAccount.roi = 4;
        a1.roi = 4; //bad practice (static data members should be modified using class and not object)

        a1.announce();
to usne class ka code dekha ni, to agar ek object k andr 20 property h to to har property ko thode jaa k dekhega. Aur because of static galti se koi roi kisi particular object ka smjh k change krega aur ye roi saare objects k liye change ho jaega.
------------------------------------------------
Aise cases m code likhte h to warning kya aaega?
------------------------------------------------
Static Data Member should be modified using class name and not an object. Qki koi code pdhega to usko lgega iska impact sirf uss object ko hoga lekin actually impact saare object ko hoga.
-> Static Data Members live in class & not in objects. Hence, shared by all objects.

Why warning when we change it to a1.roi = 4;?
-> Because static data members belong to class & not objects. So, humein aisa likhna chaiye -
    a1.roi = 4; //bad practice
    BankAccount.roi = 4; //Good Practice 
------------------
Static Function :
------------------
Static functions are such function which doesn't require object for their invocation (are invoked via class name)
-> Aisa function jisko call krne se liye object naa banana pde.

Meaning -> Doesn't require objects for their invocation, can be called directly via class names.

Where are they used?
-> Utility Stateless functions for example, Math.min, Math.max, Arrays.sort, Array.fill
-> Stateless -> nothing is saved between two function calls, each call is independent and takes all input as parameters.

-> They are used for utility functions (stateless functions) means agar humein 2 number ka mean nikaalna h to iske liye jaise math.mean(a, b) dono parameter leta h aur mean nikaal k de deta h, array.sort() aur isme kisi v atarh ka array pass kr de to wo sort kr k humein de deta h. To isko jo v chije chaiye parameter m pass kr di jaati h

Implications :
-> 'this' keyword cannot be used in static functions. Why?
    ( Because it can be called by class name, in that case "this" won't know which instance to point to)
-> Non-static data members can't be used in static functions. Why?
    (Because it can be called by classname and in that case we don't know if any objects exists, and if they do, we don't know which objects non-static data members to use)
-> Non-static functions can't be used in static functions. Why?
    (-> can be used, by making an object inside the static function and calling the non-static function on it
     -> can't be called directly)

     static class BankAccount {
        int anum;
        int money;
        static int roi; //rate of interest

        void announce() {
            System.out.println(this.anum + ", " + this.money + ", " + roi);
        }

        static void decreaseROI() {
            roi--;
            //anum and money can't be used
            announce(); //not allowed

            //what is allowed
            BankAccount a = new BankAccount();
            a.announce();
        }
    }

Miscellaneous Question -
Q1) Can non-static function, use static data member? Why?
    -> Yes, because we have extra information available (not less)
Q2) Can non-static function, use static function? Why?
    -> Same as above
----------------------------
Inheritance & Polymorphism :
----------------------------
    P and C - all cases, except abstract functions and class
(Purani class m jb koi new feature deni ho ti Inheritance use krte h)

-> 2 data member + 2 function
    class Main {

        static class P {
            int d = 1;
            int d1 = 10;

            void fun() {
                System.out.println("P fun");
            }

            void fun1() {
                System.out.println("P fun1");
            }
        }

        static class C extends P {
            //P ka saara maal C m aa gya h
            int d = 2;
            int d2 = 20;

            void fun() {
                System.out.println("C fun");
            }

            void fun2() {
                System.out.println("C fun2");
            }
        }

    public static void main(String[] args) throws NumberFormatException, IOException {
        Case-1 : P ka maine reference banaya aur P ka hi instance banaya to kya hoga?
        //Case-1 => P and P
        P obj = new P();

        System.out.println(obj.d); //1 
        System.out.println(obj.d1);  //10
        obj.fun(); //P fun
        obj.fun1(); //P fun1

        //Case-2 => C and C 
        C obj = new C();

        System.out.println(obj.d); //2 -> D dono m common but red=f humara 'C' h
        System.out.println(((P)obj).d1); //C means reference badal k 'P" m typecast kr diye //1
                                         //conflict (object has P.d and C.d, resolved by ref -> C)
        System.out.println(obj.d1); //10 //available only in P
        System.out.println(obj.d2); //20 //available only in C
        obj.fun(); //C fun //available at C first
        obj.fun1(); //P fun1 //available only in P
        obj.fun2(); //C fun2 //available only in C

    GoldenRule : 
    1) Compiler watches reference/left hand side
    2) Runtime watches RHS i.e. instance kiska h
    3) Conflict agar same level ki ho to wo reference se tootegi (C & P k case m C is reference)
   So, compile hoga ya ni wo reference pe depend krta hai aur agar compile ho gya aur run ho rha h to actually kya chlega wo instance pe depend krta h

   Case-2 m humara 'C' ka reference h to d, d1, d2, fun(), fun1(), fun2() allowed h (upar wale saare features hote h)

    Case-3 : 
     //Case-3 => P and C (object C ka h to wo phele C se move krega but agar wo LHS m ni hoga to Compile Time Error hoga)

        P obj = new C();

        System.out.println(obj.d1); //conflict (object has P.d and C.d, resolved by ref -> P)
        System.out.println(obj.d1); //available only in P
        //System.out.println(obj.d2); //not allowed, because LHS (Compiler) doesn't allow aur iss P m humein d2 nazar ni aa rha, bhale hi object 'C' ka ho skta h lekin reference allow ni krega (Compile Time Error)
        System.out.println(((C)obj).d2); //C k andr TypeCast kr diye and we see C.d2

        obj.fun(); //available at C first
        obj.fun1(); //available only in P
        obj.fun2(); //not allowed,because compiler won't allow
        ((C).obj).fun2(); //typecasting allows it and  we see C fun

    Case-4 : 
        C obj = new P();
        --> Error : incompatible types: P cannot be converted to C
        //This statement itself is not allowed. Why does the compiler not allow?

    }





    Note : Saare concepts LLD m practice hoga
 
