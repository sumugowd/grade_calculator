#ifndef RECORD_H
#define RECORD_H

#include <iostream>
using namespace std;

class Record{
    private:
        int id;
        string name;
        int age;

    public:
    // Constructors
    Record();
    Record(int id, string name, int age);

    // Getters
    int getID() const;
    string getName() const;
    int getAge() const;

    // Setters
    void setName(string name);
    void setAge(int age);

    // Display
    void display() const;
};

#endif