
import {createRequire as ___nfyCreateRequire} from "module";
import {fileURLToPath as ___nfyFileURLToPath} from "url";
import {dirname as ___nfyPathDirname} from "path";
let __filename=___nfyFileURLToPath(import.meta.url);
let __dirname=___nfyPathDirname(___nfyFileURLToPath(import.meta.url));
let require=___nfyCreateRequire(import.meta.url);


// netlify/function/googleAuth.ts
import { google } from "googleapis";
var googleAuth_default = async (request) => {
  const data = await request.json();
  const { clientId, scopes, clientSecret, env } = data;
  const oauth = new google.auth.OAuth2(clientId, clientSecret, env);
  const url = oauth.generateAuthUrl({
    scope: scopes
  });
  return new Response(JSON.stringify(url), { status: 200 });
};
export {
  googleAuth_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibmV0bGlmeS9mdW5jdGlvbi9nb29nbGVBdXRoLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBnb29nbGUgfSBmcm9tIFwiZ29vZ2xlYXBpc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcXVlc3Q6IFJlcXVlc3QpPT57XHJcbiAgLy8gVGhlIHJlcXVlc3QgY29udGFpbnMgdGhlIGF1dGhEYXRhIHdlIGRlZmluZWQgZWFybGllciBpbiB0aGUgY29tcG9uZW50LlxyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcclxuICBjb25zdCB7Y2xpZW50SWQsIHNjb3BlcywgY2xpZW50U2VjcmV0LCBlbnZ9ID0gZGF0YTtcclxuXHJcbiAgLy8gUGFzcyB5b3VyIGNyZWRlbnRpYWxzIGFuZCB0aGUgcmVzcGVjdGl2ZSByZWRpcmVjdCBVUkkuXHJcbiAgLy8gTm90aWNlIHRoYXQgaWYgeW91IGFyZSB0ZXN0aW5nIGluIGRldiwgaXQgd2lsbCB3b3JrIHdpdGggdGhlIGxvY2FsaG9zdFxyXG4gIC8vIGFuZCB3aGVuIHVzZWQgaW4gcHJvZCwgdGhlIHNpdGUncyBVUkwgd2lsbCBiZSB1c2VkLlxyXG4gIGNvbnN0IG9hdXRoID0gbmV3IGdvb2dsZS5hdXRoLk9BdXRoMihjbGllbnRJZCwgY2xpZW50U2VjcmV0LCBlbnYpO1xyXG4gIGNvbnN0IHVybCA9IG9hdXRoLmdlbmVyYXRlQXV0aFVybCh7XHJcbiAgICBzY29wZTpzY29wZXNcclxuICB9KTtcclxuICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHVybCksIHtzdGF0dXM6MjAwfSk7XHJcbn0iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7O0FBQUEsU0FBUyxjQUFjO0FBRXZCLElBQU8scUJBQVEsT0FBTyxZQUFtQjtBQUV2QyxRQUFNLE9BQU8sTUFBTSxRQUFRLEtBQUs7QUFDaEMsUUFBTSxFQUFDLFVBQVUsUUFBUSxjQUFjLElBQUcsSUFBSTtBQUs5QyxRQUFNLFFBQVEsSUFBSSxPQUFPLEtBQUssT0FBTyxVQUFVLGNBQWMsR0FBRztBQUNoRSxRQUFNLE1BQU0sTUFBTSxnQkFBZ0I7QUFBQSxJQUNoQyxPQUFNO0FBQUEsRUFDUixDQUFDO0FBQ0QsU0FBTyxJQUFJLFNBQVMsS0FBSyxVQUFVLEdBQUcsR0FBRyxFQUFDLFFBQU8sSUFBRyxDQUFDO0FBQ3ZEOyIsCiAgIm5hbWVzIjogW10KfQo=
