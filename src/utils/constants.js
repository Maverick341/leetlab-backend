export const UserRolesEnum = {
    ADMIN: 'admin',
    USER: 'user'
};

export const AvailableUserRoles = Object.values(UserRolesEnum);


export const ErrorCodes = {
    // General
    UNKNOWN_ERROR: 'UNKNOWN_ERROR',
    VALIDATION_ERROR: 'VALIDATION_ERROR',
    SERVER_ERROR: 'SERVER_ERROR',
    RESOURCE_CONFLICT: 'RESOURCE_CONFLICT',
    TOO_MANY_REQUESTS: 'TOO_MANY_REQUESTS',
    MISSING_FIELDS: 'MISSING_FIELDS',

    // Auth & Permissions
    AUTH_REQUIRED: 'AUTH_REQUIRED',
    PERMISSION_DENIED: 'PERMISSION_DENIED',
    UNAUTHORIZED_ACCESS: 'UNAUTHORIZED_ACCESS',
    USER_NOT_LOGGED_IN: 'USER_NOT_LOGGED_IN',

    // Auth Middleware
    INVALID_ACCESS_TOKEN: 'INVALID_ACCESS_TOKEN',
    REFRESH_TOKEN_MISSING: 'REFRESH_TOKEN_MISSING',
    REFRESH_TOKEN_INVALID: 'REFRESH_TOKEN_INVALID',
    REFRESH_TOKEN_EXPIRED: 'REFRESH_TOKEN_EXPIRED',

    // Token-related
    TOKEN_MISSING: 'TOKEN_MISSING',
    TOKEN_INVALID: 'TOKEN_INVALID',
    TOKEN_EXPIRED: 'TOKEN_EXPIRED',

    // Auth - Register
    USER_ALREADY_EXISTS: 'USER_ALREADY_EXISTS',
    USER_NOT_REGISTERED: 'USER_NOT_REGISTERED',

    // Auth - Login
    INVALID_CREDENTIALS: 'INVALID_CREDENTIALS',
    USER_NOT_VERIFIED: 'USER_NOT_VERIFIED',
    PASSWORD_INCORRECT: 'PASSWORD_INCORRECT',

    // OAuth (Google/GitHub)
    INVALID_OAUTH_STATE: 'INVALID_OAUTH_STATE',
    INVALID_NONCE: 'INVALID_NONCE', // For Google only
    MISSING_ID_TOKEN: 'MISSING_ID_TOKEN', // Google specific
    INVALID_ID_TOKEN: 'INVALID_ID_TOKEN', // Google specific
    INVALID_AUTH_CODE: 'INVALID_AUTH_CODE', // Both
    OAUTH_NO_ACCESS_TOKEN: 'OAUTH_NO_ACCESS_TOKEN', // GitHub-specific
    OAUTH_LOGIN_FAILED: 'OAUTH_LOGIN_FAILED',
    ALREADY_LOGGED_IN: 'ALREADY_LOGGED_IN',

    // Email Verification
    USER_ALREADY_VERIFIED: 'USER_ALREADY_VERIFIED',

    // Avatar Upload
    AVATAR_UPLOAD_FAILED: 'AVATAR_UPLOAD_FAILED',
    AVATAR_NOT_PROVIDED: 'AVATAR_NOT_PROVIDED',
    AVATAR_FILE_PATH_NOT_FOUND: 'AVATAR_FILE_PATH_NO_FOUND',
    AVATAR_CLOUD_UPLOAD_FAILED: 'AVATAR_CLOUD_UPLOAD_FAILED',

    // Password Reset
    RESET_TOKEN_MISSING: 'RESET_TOKEN_MISSING',
    RESET_TOKEN_INVALID: 'RESET_TOKEN_INVALID',
    RESET_TOKEN_EXPIRED: 'RESET_TOKEN_EXPIRED',
    PASSWORD_RESET_FAILED: 'PASSWORD_RESET_FAILED',
    PASSWORDS_DO_NOT_MATCH: 'PASSWORDS_DO_NOT_MATCH',
    PASSWORD_SAME_AS_OLD: 'PASSWORD_SAME_AS_OLD',

    // Logout
    LOGOUT_FAILED: 'LOGOUT_FAILED',

    PROBLEM_UNSUPPORTED_LANGUAGE: 'UNSUPPORTED_LANGUAGE',
    PROBLEM_SUBMISSION_ERROR: 'SUBMISSION_ERROR',
    JUDGE0_SUBMISSION_FAILED: 'JUDGE0_SUBMISSION_FAILED',
    PROBLEM_NOT_FOUND: 'PROBLEM_NOT_FOUND',

    PLAYLIST_NOT_FOUND: 'PLAYLIST_NOT_FOUND',
};
