export interface Options {
    /**
     * Root folder path where the feature file is located
    */
    featureFolderPath: string;
    /**
     * Filter feature files only from a specific folder
     * @default '/'
    */
    featureFolderFilter?: string;
    /**
     * Filter features based on tag expressions
     * @default ''
    */
    featureTagFilter?: string;
    /**
     * Regex Pattern Used to replace specific text from scenario's description
     * @default undefined
    */
    scenarioDescriptionRegex?: RegExp;
    /**
     * Value used to get replaced for the identified regex patter from ${scenarioDescriptionRegex}
     * @default ''
    */
    scenarioDescriptionRegexReplaceValue?: string;
    /**
     * Host address of JIRA
    */
    jiraHost: string;
    /**
     * JIRA Project Key to which XRAY tests needs to be updated
    */
    jiraProject: string;
    /**
     * JIRA Username to authenticate
     * @default process.env.JIRA_USERNAME
    */
    jiraUsername?: string;
    /**
     * JIRA Password to authenticate
     * @default process.env.JIRA_PASSWORD
    */
    jiraPassword?: string;
    /**
     * Set to true to update tests sets based on the mapping given in testSetMappingDetails
     * @default false
    */
    updateTestSetMappings?: boolean;
    /**
     * Map Xray Tests to Tests Sets based on tags
     * @default false
    */
    testSetMappingDetails?: object;
}

export interface TestExecutionResults {
    /**
     * Host address of JIRA
    */
    jiraHost: string;
    /**
     * JIRA Project Key to which XRAY tests needs to be updated
    */
    jiraProject: string;
    /**
     * JIRA Username to authenticate
     * @default process.env.JIRA_USERNAME
    */
    jiraUsername?: string;
    /**
     * JIRA Password to authenticate
     * @default process.env.JIRA_PASSWORD
    */
    jiraPassword?: string;
    /**
     * List of Test Execution Id's to which reports needs to be updated
    */
    testExecutionIds: string[];
    /**
     * Root Folder path where the cucumber JSON output files are stored
    */
    cucumberJsonReportFolder?: string,
    /**
     * Parsed tests result details list
     * @default undefined
    */
    parsedTestResultDetails?: string[],
    /**
     * Skip updating execution tickets for failed test cases
     * @default false
    */
    skipUpdatingFailedCase?: boolean
}
