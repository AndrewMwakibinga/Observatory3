define({ "api": [
  {
    "type": "get",
    "url": "/api/achievements",
    "title": "Create",
    "name": "create",
    "group": "Achievements",
    "description": "<p>Creates a new achievement</p>",
    "permission": [
      {
        "name": "public"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>New instance of an Achievement</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "UnknownException",
            "description": "<p>Could not create the Achievement</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/achievement/achievement.controller.js",
    "groupTitle": "Achievements"
  },
  {
    "type": "get",
    "url": "/api/achievements",
    "title": "Destroy",
    "name": "destroy",
    "group": "Achievements",
    "description": "<p>Deletes a selected achievement</p>",
    "permission": [
      {
        "name": "public"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Deleted Achievement</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "UnknownException",
            "description": "<p>Could not delete the Achievement</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/achievement/achievement.controller.js",
    "groupTitle": "Achievements"
  },
  {
    "type": "get",
    "url": "/api/achievements",
    "title": "Index",
    "name": "index",
    "group": "Achievements",
    "description": "<p>Get list of Achievements</p>",
    "permission": [
      {
        "name": "public"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Collection",
            "optional": false,
            "field": "root",
            "description": "<p>Collection of all active Observatory Achievements.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "UnknownException",
            "description": "<p>Could not retrieve Achievement collection</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/achievement/achievement.controller.js",
    "groupTitle": "Achievements"
  },
  {
    "type": "get",
    "url": "/api/achievements",
    "title": "Show",
    "name": "show",
    "group": "Achievements",
    "description": "<p>Get a single achievement</p>",
    "permission": [
      {
        "name": "public"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Single Achievement</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "UnknownException",
            "description": "<p>Could not retrieve Achievement collection</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/achievement/achievement.controller.js",
    "groupTitle": "Achievements"
  },
  {
    "type": "get",
    "url": "/api/achievements",
    "title": "Update",
    "name": "update",
    "group": "Achievements",
    "description": "<p>Updates an existing Achievement</p>",
    "permission": [
      {
        "name": "public"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Updated Achievement</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "UnknownException",
            "description": "<p>Could not update the Achievement</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/achievement/achievement.controller.js",
    "groupTitle": "Achievements"
  },
  {
    "type": "GET",
    "url": "/api/commit/",
    "title": "Index",
    "name": "Index",
    "group": "Commit_Controller",
    "description": "<p>Gets list of commits by using the Commit.find function. Send an error if it doesn't work, otherwise return json file of commits.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "index",
            "description": "<p>File with list of commits</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "500",
            "description": "<p>Internal server error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/commit/commit.controller.js",
    "groupTitle": "Commit_Controller"
  },
  {
    "type": "GET",
    "url": "/api/commit/",
    "title": "Show",
    "name": "Show",
    "group": "Commit_Controller",
    "description": "<p>Shows a single commit.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "show",
            "description": "<p>file with one commit</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "404",
            "description": "<p>no commits found</p>"
          },
          {
            "group": "Error",
            "optional": false,
            "field": "500",
            "description": "<p>Internal server error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/commit/commit.controller.js",
    "groupTitle": "Commit_Controller"
  },
  {
    "type": "GET",
    "url": "/api/commit/",
    "title": "showProjectCommits",
    "name": "showProjectCommits",
    "group": "Commit_Controller",
    "description": "<p>Shows a list of a project's commits</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "showProjectCommits",
            "description": "<p>File with a list of commits</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "404",
            "description": "<p>no commits found</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/commit/commit.controller.js",
    "groupTitle": "Commit_Controller"
  },
  {
    "type": "GET",
    "url": "/api/commit/",
    "title": "showUserCommits",
    "name": "showUserCommits",
    "group": "Commit_Controller",
    "description": "<p>Shows a list of commits by a user within a certain timeperiod</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "showUserCommits",
            "description": "<p>File with a list of commits</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/commit/commit.controller.js",
    "groupTitle": "Commit_Controller"
  },
  {
    "type": "get",
    "url": "/api/excused_absences/admin",
    "title": "Admin",
    "name": "admin",
    "group": "Excused_Absence",
    "description": "<p>Get list of Excused Absences for all users</p>",
    "permission": [
      {
        "name": "private"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Collection",
            "optional": false,
            "field": "root",
            "description": "<p>Collection of all Excused Absences.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "UnknownException",
            "description": "<p>Could not retrieve ExcusedAbsence collection</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/excused_absence/excused_absence.controller.js",
    "groupTitle": "Excused_Absence"
  },
  {
    "type": "post",
    "url": "/api/excused_absences/:id",
    "title": "Create",
    "name": "create",
    "group": "Excused_Absence",
    "description": "<p>Create a new ExcusedAbsence record</p>",
    "permission": [
      {
        "name": "private"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Model",
            "optional": false,
            "field": "root",
            "description": "<p>A single ExcusedAbsence model</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "UnknownException",
            "description": "<p>Could not create ExcusedAbsence model</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/excused_absence/excused_absence.controller.js",
    "groupTitle": "Excused_Absence"
  },
  {
    "type": "delete",
    "url": "/api/excused_absences/:id",
    "title": "Delete",
    "name": "delete",
    "group": "Excused_Absence",
    "description": "<p>Deletes an ExcusedAbsence record</p>",
    "permission": [
      {
        "name": "private"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Model",
            "optional": false,
            "field": "root",
            "description": "<p>The destroyed ExcusedAbsence model</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "UnknownException",
            "description": "<p>Could not destroy ExcusedAbsence model</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/excused_absence/excused_absence.controller.js",
    "groupTitle": "Excused_Absence"
  },
  {
    "type": "get",
    "url": "/api/excused_absences",
    "title": "Index",
    "name": "index",
    "group": "Excused_Absence",
    "description": "<p>Get list of Excused Absences for the requesting user</p>",
    "permission": [
      {
        "name": "private"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Collection",
            "optional": false,
            "field": "root",
            "description": "<p>Collection of all the user's Excused Absences.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "UnknownException",
            "description": "<p>Could not retrieve ExcusedAbsence collection</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/excused_absence/excused_absence.controller.js",
    "groupTitle": "Excused_Absence"
  },
  {
    "type": "get",
    "url": "/api/excused_absences/:id",
    "title": "Show",
    "name": "show",
    "group": "Excused_Absence",
    "description": "<p>Show an individual ExcusedAbsence</p>",
    "permission": [
      {
        "name": "private"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Model",
            "optional": false,
            "field": "root",
            "description": "<p>A single ExcusedAbsence model</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "UnknownException",
            "description": "<p>Could not retrieve ExcusedAbsence model</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/excused_absence/excused_absence.controller.js",
    "groupTitle": "Excused_Absence"
  },
  {
    "type": "put",
    "url": "/api/excused_absences/:id",
    "title": "Update",
    "name": "update",
    "group": "Excused_Absence",
    "description": "<p>Update a new ExcusedAbsence record</p>",
    "permission": [
      {
        "name": "private"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Model",
            "optional": false,
            "field": "root",
            "description": "<p>The updated ExcusedAbsence model</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "UnknownException",
            "description": "<p>Could not update ExcusedAbsence model</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/excused_absence/excused_absence.controller.js",
    "groupTitle": "Excused_Absence"
  },
  {
    "type": "GET",
    "url": "/api/project",
    "title": "Defaults",
    "name": "Defaults",
    "group": "Project_Controller",
    "description": "<p>Get list of default projects</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "defaults",
            "description": "<p>list of default projects</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "500",
            "description": "<p>Internal server error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/project/project.controller.js",
    "groupTitle": "Project_Controller"
  },
  {
    "type": "GET",
    "url": "/api/project",
    "title": "Index",
    "name": "Index",
    "group": "Project_Controller",
    "description": "<p>Gets list of current projects</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "index",
            "description": "<p>file with list of projects</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "500",
            "description": "<p>Internal server error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/project/project.controller.js",
    "groupTitle": "Project_Controller"
  },
  {
    "type": "GET",
    "url": "/api/project",
    "title": "Show",
    "name": "Show",
    "group": "Project_Controller",
    "description": "<p>Show a single project</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "show",
            "description": "<p>information about one project</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "404",
            "description": "<p>No project found</p>"
          },
          {
            "group": "Error",
            "optional": false,
            "field": "500",
            "description": "<p>Internal server error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/project/project.controller.js",
    "groupTitle": "Project_Controller"
  },
  {
    "type": "GET",
    "url": "/api/project",
    "title": "Stats",
    "name": "Stats",
    "group": "Project_Controller",
    "description": "<p>Get various stats for projects</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "stats",
            "description": "<p>file with stats for projects</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "400",
            "description": "<p>No stats found</p>"
          },
          {
            "group": "Error",
            "optional": false,
            "field": "500",
            "description": "<p>Internal server error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/project/project.controller.js",
    "groupTitle": "Project_Controller"
  },
  {
    "type": "GET",
    "url": "/api/project",
    "title": "addTechBubble",
    "name": "addTechBubble",
    "group": "Project_Controller",
    "description": "<p>Adds a tech bubble to the project</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "HTTP",
            "optional": false,
            "field": "200",
            "description": "<p>Successfully added tech bubble</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "500",
            "description": "<p>Error finding project</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/project/project.controller.js",
    "groupTitle": "Project_Controller"
  },
  {
    "type": "GET",
    "url": "/api/project",
    "title": "Authors",
    "name": "authors",
    "group": "Project_Controller",
    "description": "<p>Get authors on a project</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "authors",
            "description": "<p>list of authors on a project</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "500",
            "description": "<p>Unable to find authors</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/project/project.controller.js",
    "groupTitle": "Project_Controller"
  },
  {
    "type": "GET",
    "url": "/api/project",
    "title": "deletePhoto",
    "name": "deletePhoto",
    "group": "Project_Controller",
    "description": "<p>Delete a photo</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "HTTP",
            "optional": false,
            "field": "200",
            "description": "<p>Successfully deleted the photo</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "404",
            "description": "<p>Error finding project</p>"
          },
          {
            "group": "Error",
            "optional": false,
            "field": "500",
            "description": "<p>Error verifying user</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/project/project.controller.js",
    "groupTitle": "Project_Controller"
  },
  {
    "type": "GET",
    "url": "/api/project",
    "title": "Destroy",
    "name": "destroy",
    "group": "Project_Controller",
    "description": "<p>Delete a project from the database</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "HTTP",
            "optional": false,
            "field": "204",
            "description": "<p>Successfully deleted the project</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "404",
            "description": "<p>Error finding project</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/project/project.controller.js",
    "groupTitle": "Project_Controller"
  },
  {
    "type": "GET",
    "url": "/api/project",
    "title": "indexOld",
    "name": "indexOld",
    "group": "Project_Controller",
    "description": "<p>Get list of past projects</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "indexOld",
            "description": "<p>list of past projects</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "500",
            "description": "<p>Internal server error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/project/project.controller.js",
    "groupTitle": "Project_Controller"
  },
  {
    "type": "GET",
    "url": "/api/project",
    "title": "markActive",
    "name": "markActive",
    "group": "Project_Controller",
    "description": "<p>Mark a project as being active this semester</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "HTTP",
            "optional": false,
            "field": "200",
            "description": "<p>Successfully marked the project</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "404",
            "description": "<p>Error finding project</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/project/project.controller.js",
    "groupTitle": "Project_Controller"
  },
  {
    "type": "GET",
    "url": "/api/project",
    "title": "markDefaults",
    "name": "markDefault",
    "group": "Project_Controller",
    "description": "<p>Mark a project as a default project</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "HTTP",
            "optional": false,
            "field": "200",
            "description": "<p>Successfully marked the project</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "404",
            "description": "<p>Error finding project</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/project/project.controller.js",
    "groupTitle": "Project_Controller"
  },
  {
    "type": "GET",
    "url": "/api/project",
    "title": "markPast",
    "name": "markPast",
    "group": "Project_Controller",
    "description": "<p>Mark a project as a past project</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "HTTP",
            "optional": false,
            "field": "200",
            "description": "<p>Successfully marked the project</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "404",
            "description": "<p>Error finding project</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/project/project.controller.js",
    "groupTitle": "Project_Controller"
  },
  {
    "type": "GET",
    "url": "/api/project",
    "title": "unmarkDefault",
    "name": "markPast",
    "group": "Project_Controller",
    "description": "<p>Unmark a default project</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "HTTP",
            "optional": false,
            "field": "200",
            "description": "<p>Successfully unmarked the project</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "404",
            "description": "<p>Error finding project</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/project/project.controller.js",
    "groupTitle": "Project_Controller"
  },
  {
    "type": "GET",
    "url": "/api/project",
    "title": "Mentees",
    "name": "mentees",
    "group": "Project_Controller",
    "description": "<p>Get list of mentees</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "mentees",
            "description": "<p>list of mentees</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "500",
            "description": "<p>Error when finding mentees</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/project/project.controller.js",
    "groupTitle": "Project_Controller"
  },
  {
    "type": "GET",
    "url": "/api/project",
    "title": "myProjects",
    "name": "myProjects",
    "group": "Project_Controller",
    "description": "<p>show the current user's projects</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "myProjects",
            "description": "<p>list of projects</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "500",
            "description": "<p>Internal server error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/project/project.controller.js",
    "groupTitle": "Project_Controller"
  },
  {
    "type": "GET",
    "url": "/api/project",
    "title": "removeTech",
    "name": "removeTech",
    "group": "Project_Controller",
    "description": "<p>Removes a tech bubble from the project</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "HTTP",
            "optional": false,
            "field": "200",
            "description": "<p>Successfully removed tech bubble</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "500",
            "description": "<p>Error finding project</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/project/project.controller.js",
    "groupTitle": "Project_Controller"
  },
  {
    "type": "GET",
    "url": "/api/project",
    "title": "Update",
    "name": "update",
    "group": "Project_Controller",
    "description": "<p>Updates an existing project</p>",
    "permission": [
      {
        "name": "Mentors/project owners"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "updated",
            "description": "<p>information</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "404",
            "description": "<p>No project found</p>"
          },
          {
            "group": "Error",
            "optional": false,
            "field": "500",
            "description": "<p>Error updating the project</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/project/project.controller.js",
    "groupTitle": "Project_Controller"
  },
  {
    "type": "GET",
    "url": "/api/project",
    "title": "Upload",
    "name": "upload",
    "group": "Project_Controller",
    "description": "<p>Upload an image</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "HTTP",
            "optional": false,
            "field": "201",
            "description": "<p>Successfully uploaded and save the image</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "404",
            "description": "<p>Error finding project</p>"
          },
          {
            "group": "Error",
            "optional": false,
            "field": "500",
            "description": "<p>Error verifying user</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/project/project.controller.js",
    "groupTitle": "Project_Controller"
  },
  {
    "type": "post",
    "url": "/api/projects",
    "title": "Create",
    "name": "create",
    "group": "Project",
    "description": "<p>Creates a new Project</p>",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Model",
            "optional": false,
            "field": "root",
            "description": "<p>The newly created Project.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "422": [
          {
            "group": "422",
            "optional": false,
            "field": "UnknownException",
            "description": "<p>User's projects could not be updated</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "UnknownException",
            "description": "<p>Could not retrieve find current User in database</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/project/project.controller.js",
    "groupTitle": "Project"
  },
  {
    "type": "get",
    "url": "/api/users",
    "title": "Index",
    "name": "commits",
    "group": "User",
    "description": "<p>Get list of Users</p>",
    "permission": [
      {
        "name": "public"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Collection",
            "optional": false,
            "field": "root",
            "description": "<p>Collection of all active Observatory Users.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "UnknownException",
            "description": "<p>Could not retrieve User collection</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/user/user.controller.js",
    "groupTitle": "User"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "server/api/user/user.model.js",
    "group": "_home_raos_code_Observatory3_server_api_user_user_model_js",
    "groupTitle": "_home_raos_code_Observatory3_server_api_user_user_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "server/api/user/user.model.js",
    "group": "_home_raos_code_Observatory3_server_api_user_user_model_js",
    "groupTitle": "_home_raos_code_Observatory3_server_api_user_user_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "server/api/user/user.model.js",
    "group": "_home_raos_code_Observatory3_server_api_user_user_model_js",
    "groupTitle": "_home_raos_code_Observatory3_server_api_user_user_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "server/api/user/user.model.js",
    "group": "_home_raos_code_Observatory3_server_api_user_user_model_js",
    "groupTitle": "_home_raos_code_Observatory3_server_api_user_user_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "server/api/user/user.model.js",
    "group": "_home_raos_code_Observatory3_server_api_user_user_model_js",
    "groupTitle": "_home_raos_code_Observatory3_server_api_user_user_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "server/api/user/user.model.js",
    "group": "_home_raos_code_Observatory3_server_api_user_user_model_js",
    "groupTitle": "_home_raos_code_Observatory3_server_api_user_user_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "server/api/user/user.model.js",
    "group": "_home_raos_code_Observatory3_server_api_user_user_model_js",
    "groupTitle": "_home_raos_code_Observatory3_server_api_user_user_model_js",
    "name": "Public"
  }
] });
