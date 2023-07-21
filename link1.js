class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    // Insert a new node at the end of the linked list
    insert(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
   
      // Delete the first node (node at the beginning) of the linked list
     deleteFirstNode() {
        if (this.head === null) {
        console.log("List is empty. Nothing to delete.");
        return;
    }

    this.head = this.head.next;
    console.log("First node deleted.");
    }
    
      // Delete the last node of the linked list
      deleteLastNode() {
        if (this.head === null) {
          console.log("List is empty. Nothing to delete.");
          return;
        }
    
        if (this.head.next === null) {
          this.head = null;
          console.log("Last node deleted. List is now empty.");
          return;
        }
    
        let current = this.head;
        let prev = null;
        while (current.next !== null) {
          prev = current;
          current = current.next;
        }
        prev.next = null;
        console.log("Last node deleted.");
      }
    
  
    // Display the linked list
    display() {
      if (!this.head) {
        console.log("List is empty.");
        return;
      }
  
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
  
  // Example usage:
  const linkedList = new LinkedList();
  linkedList.insert(10);
  linkedList.insert(20);
  linkedList.insert(30);
  linkedList.insert(40);
  linkedList.insert(50);
  
  console.log("Original linked list:");
  linkedList.display(); 
  
  linkedList.deleteFirstNode();
  console.log("Linked list after deleting the first node:");
  linkedList.display(); 
  
  linkedList.deleteLastNode();
  console.log("Linked list after deleting the last node:");
  linkedList.display(); 
  
  