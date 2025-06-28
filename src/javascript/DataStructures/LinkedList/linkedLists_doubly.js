// Linked List
// 5 --> 6 --> 7
class Node {
    constructor(value) {
        this.value = value,
        this.next = null,
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

    insert(index, value) {
        // check params
        if (index >= this.length) {
            return this.append(value);
        }
        if (index === 0) {
            return this.prepend(value);
        }
        const leader = this.traverseToIndex(index - 1);
        const newNode = new Node(value);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = holdingPointer;
        holdingPointer.prev = newNode;  
        this.length++;
        return this;
    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    remove(index) {
        // check params
        if (index >= this.length) {
            return this.tail;
        }
        if (index === 0) {
            this.head = this.head.next;
            return this.head;
        }
        const leader = this.traverseToIndex(index - 1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        unwantedNode.next.prev = leader;
        this.length--;
        return this;
    }
}

const myLinkedList = new DoublyLinkedList(5);
myLinkedList.append(6);
myLinkedList.append(7);
myLinkedList.prepend(4);
myLinkedList.insert(2, 10);
console.log(myLinkedList.printList());
console.log(myLinkedList);
myLinkedList.remove(2);
console.log(myLinkedList.printList());