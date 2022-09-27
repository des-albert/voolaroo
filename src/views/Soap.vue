<template>
    <div class="tokens">
        <div class="container">
            <div class="row"></div>
                <div align="left" class="col-8 border-left">
                    <h1>SOAP</h1>
                    <a href="https://github.com/des-albert/vueSoap">
                        https://github.com/des-albert/vueSoap</a>
                    <br>    
                    <a href="https://github.com/des-albert/ngSoap">
                    https://github.com/des-albert/ngSoap</a> 
                    <br> 
                    <a href="https://github.com/des-albert/SOPE">
                        https://github.com/des-albert/SOPE</a>
                        
                    <p>A collection of related programs have been written to use the SOAP interfaces to 
                        Salesforce.com and Oracle Agile PLM</p>
                    <p>The goal of the programs is to integrate data from Salesforce.com and Agile PLM so that a 
                        workflow of processes can be managed from a single interface</p>
                    <p>SOPE is written in Java and JavaFX. It uses the Salesforce SOAP Web Service library also known as Force.com</p>
                    <p>In order to use the SOAP interface, it is necessary to generate a WSDL file which defines the 
                        SOAP interface to an organization's Salesforce database. This process is documented 
                        at developer.salesforce.com. To generate the WSDL, it is necessary to have developer access to Salesforce. 
                        An alternate method for creating the WSDL is to create a generic WSDL from a developer.salesforce.com 
                        account then modify this to match custom developments. Definitions of objects and their fields can be 
                        found using https://workbench.developerforce.com</p>
                     <p>SOAP access to Agile PLM is provided by the Agile PLM Web Services component</p>
                     <a href="https://docs.oracle.com/cd/E50306_29/otn/pdf/user/html_agabd/output/title.htm">
                        Oracle Agile Product Lifecycle Management Web Services Guide</a>

                     <p>A summary of Salesforce tasks assigned to the selected user is displayed to allow actions to be selected. 
                        The primary purpose of these tasks is Product Lifecycle Management using Agile PLM. 
                        JavaFX forms are used to input data or using drop-down lists</p>
                     <p>Status information is updated in Salesforce to track the progress of Agile approval stages.</p>      

                </div>    
        </div>
    </div>
</template>        