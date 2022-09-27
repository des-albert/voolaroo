<template>
    <div class="javelin">
        <div class="container">
            <div class="row"></div>
            <div align="left" class="col-8 border-left">
                <h1>Javelin</h1>
                <a href="https://github.com/des-albert/javelin">
                https://github.com/des-albert/javelin</a>
                <p>Javelin is a drag &amp; drop configuration program that simulates assembly from an inventory of parts. The
                    relationship between the parts is defined in terms of the manner in which they interconnect.</p>
                <p>A connection between parts is described by a slot into which other components can be inserted.</p>
                <p>The database of parts is maintained in a JSON file which can be edited by Javelin using drag and drop. 
                    Each part has the following elements -</p>
                    <ul>
                        <li>Code - a unique part identifier</li>
                        <li>Description - Plain text definition of the part</li>
                        <li>Category - A family of similar parts</li>
                        <li>Slot - A connector that enables other parts to be linked</li>
                    </ul>
                    <p>Slots are similarly defined by a JSON file that contains</p>
                    <ul></ul>
                        <li>Slot Description - a unique identifier</li>
                        <li>Type</li>
                        <ul>
                            <li>Exact number of parts that can be inserted</li>
                            <li>Maximum number of inserted parts</li>
                            <li>Unlimited parts may be inserted</li>
                        
                        <li>List of Parts that can be inserted</li>
                    </ul>
                    <p>The inventory of parts is loaded into a tree of components in the left pane of the main screen. 
                        The data in this tree can be edited as parts are added or removed from the inventory. 
                        Relationships between the parts are managed via the slots that are associated with each part.</p>
            </div>
        </div>
    </div>
</template>