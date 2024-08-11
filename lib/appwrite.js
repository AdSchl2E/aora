import {
  Account,
  Avatars,
  Client,
  Databases,
  ID,
} from "react-native-appwrite";

export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.adschl2e.prospectgo",
  projectId: "66a64cdf003bc4565f56",
  databaseId: "66a64dda00298a34a79f",
};

const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId)
  .setPlatform(appwriteConfig.platform);

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

// Register user
export async function createUser(email, password, username) {
  await account.create(ID.unique(), email, password, username);
  await login(email, password);
  setLoggedInUser(await account.get());
}

// Sign In
export async function signIn(email, password) {
  await account.createEmailPasswordSession(email, password);
  setLoggedInUser(await account.get());
}

// Sign Out
export async function signOut() {
  try {
    const session = await account.deleteSession("current");

    return session;
  } catch (error) {
    throw new Error(error);
  }
}

// Get current user
export async function getCurrentUser() {
  if (!account) return null;
  try {
    return await account.get();
  } catch (error) {
    return null;
  }
}