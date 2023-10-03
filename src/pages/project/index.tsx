import Project from "@/components/Project";
import Container from "@/layout/container";
import { firebaseStore } from "@/service";
import { collection, getDocs } from "firebase/firestore";
import { Contact, Download } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function ProjectPage() {
  const [projects, setProjects] = React.useState<any[]>([]);
  React.useEffect(() => {
    getProject();
  }, []);

  const getProject = async () => {
    const data = await getDocs(collection(firebaseStore, "project"));
    let arr: any[] = [];
    data.forEach((doc) => {
      arr.push(doc.data());
    });
    console.log(arr);

    setProjects(arr);
  };
  return (
    <Container>
      <div className="container mx-auto flex px-5 py-2 mb-10 md:flex-row flex-col items-center">
        <div className="flex flex-col md:w-3/6 md:items-start mb-6 md:mb-0 text-left">
          <div className="mb-6">
            <p className="text-lg mb-4 text-gray-600 dark:text-day">
              {
                "These are some experiences on my working time. The main contents are:"
              }
            </p>
            <p className="ml-3 text-lg text-gray-600 dark:text-day mb-1">
              {"• Records of my working process"}
            </p>
            <p className="ml-3 text-lg text-gray-600 dark:text-day mb-1">
              {"• Some projects I builded"}
            </p>
            <p className="ml-3 text-lg text-gray-600 dark:text-day mb-1">
              {"• Some libraries rework"}
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href={`/`}
              scroll={false}
              target="_blank"
              aria-label="Telegram"
              className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
            >
              <svg
                className="w-5 h-5"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3.11-8.83l-2.498-.779c-.54-.165-.543-.537.121-.804l9.733-3.76c.565-.23.885.061.702.79l-1.657 7.82c-.116.557-.451.69-.916.433l-2.551-1.888-1.189 1.148c-.122.118-.221.219-.409.244-.187.026-.341-.03-.454-.34l-.87-2.871-.012.008z" />
              </svg>
            </Link>

            <Link
              href={`/`}
              scroll={false}
              target="_blank"
              aria-label="Twitter"
              className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
            >
              <svg
                className="w-5 h-5"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M15.3 5.55a2.9 2.9 0 0 0-2.9 2.847l-.028 1.575a.6.6 0 0 1-.68.583l-1.561-.212c-2.054-.28-4.022-1.226-5.91-2.799-.598 3.31.57 5.603 3.383 7.372l1.747 1.098a.6.6 0 0 1 .034.993L7.793 18.17c.947.059 1.846.017 2.592-.131 4.718-.942 7.855-4.492 7.855-10.348 0-.478-1.012-2.141-2.94-2.141zm-4.9 2.81a4.9 4.9 0 0 1 8.385-3.355c.711-.005 1.316.175 2.669-.645-.335 1.64-.5 2.352-1.214 3.331 0 7.642-4.697 11.358-9.463 12.309-3.268.652-8.02-.419-9.382-1.841.694-.054 3.514-.357 5.144-1.55C5.16 15.7-.329 12.47 3.278 3.786c1.693 1.977 3.41 3.323 5.15 4.037 1.158.475 1.442.465 1.973.538z" />
              </svg>
            </Link>

            <Link
              href={`/`}
              scroll={false}
              target="_blank"
              aria-label="Github"
              className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
            >
              <svg
                className="w-5 h-5"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M5.883 18.653c-.3-.2-.558-.455-.86-.816a50.32 50.32 0 0 1-.466-.579c-.463-.575-.755-.84-1.057-.949a1 1 0 0 1 .676-1.883c.752.27 1.261.735 1.947 1.588-.094-.117.34.427.433.539.19.227.33.365.44.438.204.137.587.196 1.15.14.023-.382.094-.753.202-1.095C5.38 15.31 3.7 13.396 3.7 9.64c0-1.24.37-2.356 1.058-3.292-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.582c.081-.024.127-.035.208-.047.803-.123 1.937.17 3.415 1.096A11.731 11.731 0 0 1 12 3.315c.912 0 1.818.104 2.684.308 1.477-.933 2.613-1.226 3.422-1.096.085.013.157.03.218.05a1 1 0 0 1 .616.58c.487 1.216.52 2.297.302 3.19.691.936 1.058 2.045 1.058 3.293 0 3.757-1.674 5.665-4.642 6.392.125.415.19.879.19 1.38a300.492 300.492 0 0 1-.012 2.716 1 1 0 0 1-.019 1.958c-1.139.228-1.983-.532-1.983-1.525l.002-.446.005-.705c.005-.708.007-1.338.007-1.998 0-.697-.183-1.152-.425-1.36-.661-.57-.326-1.655.54-1.752 2.967-.333 4.337-1.482 4.337-4.66 0-.955-.312-1.744-.913-2.404a1 1 0 0 1-.19-1.045c.166-.414.237-.957.096-1.614l-.01.003c-.491.139-1.11.44-1.858.949a1 1 0 0 1-.833.135A9.626 9.626 0 0 0 12 5.315c-.89 0-1.772.119-2.592.35a1 1 0 0 1-.83-.134c-.752-.507-1.374-.807-1.868-.947-.144.653-.073 1.194.092 1.607a1 1 0 0 1-.189 1.045C6.016 7.89 5.7 8.694 5.7 9.64c0 3.172 1.371 4.328 4.322 4.66.865.097 1.201 1.177.544 1.748-.192.168-.429.732-.429 1.364v3.15c0 .986-.835 1.725-1.96 1.528a1 1 0 0 1-.04-1.962v-.99c-.91.061-1.662-.088-2.254-.485z" />
              </svg>
            </Link>
          </div>
          {/* <div className="flex flex-row sm:justify-center gap-4 mt-6">
            <Link passHref href="/" scroll={false}>
              <button className="w-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 inline-flex py-3 px-5 rounded-lg items-center">
                <Download className="inline-block text-gray-600 dark:text-day h-7 w-7 mt-1" />
                <span className="ml-4 flex items-start flex-col leading-none">
                  <span className="text-xs text-gray-600 dark:text-day mb-1">
                    My CV
                  </span>
                  <span className="font-medium">Download</span>
                </span>
              </button>
            </Link>
            <Link passHref href="/contact" scroll={false}>
              <button className="w-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 inline-flex py-3 px-5 rounded-lg items-center">
                <Contact className="inline-block text-gray-600 dark:text-day h-7 w-7 mt-1" />
                <span className="ml-4 flex items-start flex-col leading-none">
                  <span className="text-xs text-gray-600 dark:text-day mb-1">
                    More
                  </span>
                  <span className="font-medium">Contact</span>
                </span>
              </button>
            </Link>
          </div> */}
        </div>
        <div className="w-3/6">
          <NotionAvatar className="text-gray-600 dark:text-gray-300" />
        </div>
      </div>
      {projects &&
        projects.map((post, index) => (
          <Project key={`post.id` + index.toString()} post={post} />
        ))}
    </Container>
  );
}

const NotionAvatar = (props: any) => (
  <svg
    style={{
      justifyContent: "center",
      alignSelf: "center",
      transform: "scale(-1,1)",
    }}
    viewBox="-350 -150 1500 1500"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <path
      d="M774.28 1012.022a2351.25 2351.25 0 0 1-11.083-68.462c-1.594-10.86-3.148-21.73-4.547-32.618-.98-7.628-2.47-16.35 2.72-22 7.303-7.952 13.937-14.758 14.83-26.149.842-10.717-2.782-22.4-5.048-32.803-4.752-21.816-10.668-43.362-17.204-64.704-6.642-21.683-13.924-43.162-21.311-64.6-6.906-20.044-13.545-40.269-22.54-59.5-17.071-36.495-45.951-63.522-81.643-81.568-8.876-4.488-26.982-20.51-36.256-24.097-8.526-3.298-8.495 6.333-16.887 2.705-6.708-2.9-12.954-6.767-16.71-13.244-4.078-7.032-14.304-16.868-15.861-25.055-3.3-17.351.274-32.12-12.11-45.18-10.993-11.596-25.771-19.54-41.061-23.805-33.636-9.382-78.494-2.823-98.788 28.432-9.693 14.926-13.08 32.968-26.16 45.15-11.42 10.636-8.864 17.908-23.656 23.39-.838.31-23.545-4.56-24.383-4.249-16.182-3.463-31.648 6.23-46.495 11.856-22.133 8.384-43.204 19.298-63.002 32.27-39.92 26.154-74.11 60.117-102.296 98.55-28.42 38.75-50.47 82.182-66.172 127.576a492.842 492.842 0 0 0-10.259 33.455c-1.69 6.307-3.498 12.85-1.439 19.305 1.684 5.283 5.43 9.216 9.83 12.385 5.962 4.297 17.923 7.09 17.69 15.732-.178 6.57-2.407 13.485-3.495 19.978-1.295 7.732-2.359 15.51-3.423 23.276-4.84 35.35-8.607 70.9-10.273 106.55-1.64 35.101-3 70.92-.566 106.012.161 2.314.851 4.438 1.964 6.233-1.039.398-1.119 2.335.174 2.61.906.191 1.81.382 2.716.575 1.882 1.424 4.23 2.297 6.93 2.382 1.831.058 3.661.14 5.49.234 19.301 4.035 38.6 7.846 58.152 10.732 23.768 3.507 47.606 6.367 71.518 8.693 49.136 4.776 97.884 3.192 147.084.617 49.123-2.57 98.218-3.172 147.394-1.893 49.218 1.281 98.417 3.421 147.646 4.298 55 .977 109.914-.525 164.754-4.897 7.519-.599 12.17-6.58 10.689-14.049-8.886-44.743-18.955-89.187-26.912-134.123z"
      fill="none"
    />
    <path
      d="M406.5 465.414c2.901-8.594-9.107-15.31-15.15-8.82-3.725 3.999-5.216 9.145-7 14.192l-.374 1.042c-1.472 4.03-3.317 7.928-5.37 11.693-4.289 7.86-9.72 15.148-15.945 21.581-12.77 13.197-29.499 22.526-46.535 29.104-.544.21-.773.69-.718 1.131-.815-1.11-1.629-2.22-2.439-3.33-.44-.6-1.536-.276-1.286.542 14.601 47.817 55.928 86.46 102.671 102.775 48.322 16.868 104.21 9.405 141.964-26.566 18.793-17.905 32.278-41.978 35.81-67.828a9.585 9.585 0 0 0-.058-3.076c16.612 14.02 34.035 27.036 50.322 41.452 19.024 16.84 37.501 34.844 52.688 55.291 15.407 20.747 27.021 43.657 34.782 68.3 7.382 23.438 11.777 47.653 15.852 71.857l2.06 12.297c4.616 27.342 10.023 54.291 17.916 80.844-8.828 2.83-17.625 5.748-26.422 8.686l-16.734 5.59c-4.439 1.483-9.45 3.926-14.107 4.903-3.214-.525-6.426.82-8.557 3.15a1973.237 1973.237 0 0 1-2.707-56.235c-.488-14.258-.757-28.533-1.37-42.786-.644-14.937-1.956-29.818-2.793-44.716-.028-.495-.688-.468-.75 0-1.768 13.288-3.748 26.437-4.7 39.854-.94 13.255-1.374 26.581-1.486 39.87-.219 25.923.162 51.843 1.395 77.74 2.498 52.49 7.444 104.893 15.24 156.862 2.211 14.752 4.688 29.46 7.375 44.132a1627.819 1627.819 0 0 0 3.993 21.02c.746 3.791 1.332 7.7 2.296 11.442 1.061 4.121 2.942 6.081 6.548 8.344 2.723 1.707 6.082.437 7.761-2.036 2.045-3.01 3.053-5.263 2.481-8.923-.5-3.196-1.263-6.369-1.904-9.539a1606.913 1606.913 0 0 1-3.743-19.083c-2.419-12.736-4.646-25.506-6.813-38.288-4.376-25.813-8.08-51.744-11.423-77.71-3.673-28.537-6.429-57.22-8.465-85.953 1.7 1.652 3.902 2.561 6.79 2.915 4.43.542 9.468-1.56 14.024-3.462 1.512-.63 2.972-1.24 4.338-1.723l22.111-7.816 4.531-1.609c.197 13.505 1.59 27.167 2.73 40.492l.901 10.528c1.201 14.036 2.39 28.07 3.513 42.115 2.53 31.66 7.535 63.18 12.805 94.51l1.536 9.09a3573.042 3573.042 0 0 0 5.052 29.1 705.088 705.088 0 0 0 2.738 14.501c.502 2.517.78 5.27 1.547 7.712 1.213 3.858 3.893 5.454 7.313 7.054l.63.291c1.915.878 4.174.868 5.737-.74 1.9-1.955 4.026-3.88 4.775-6.605.606-2.206.163-4.48-.269-6.694l-.107-.553-.139-.75c-.799-4.527-1.558-9.06-2.395-13.58-1.554-8.383-3.152-16.757-4.683-25.143-3.18-17.414-6.052-34.884-9.235-52.296-6.226-34.054-13.487-67.935-19.413-102.034-2.788-16.042-5.057-32.558-8.778-48.52 7.578-2.71 15.144-5.455 22.682-8.289 6.037-2.269 7.935-7.68 5.473-13.452-9.518-22.308-14.228-46.762-18.444-70.743l-2.782-15.917c-4.517-25.977-8.796-52.076-16.254-77.405-15.195-51.608-46.556-95.433-88.412-128.957-20.24-16.21-41.747-30.821-65.099-42.03l-.144-.069c-1.523-.706-5.455-2.179-8.802-2.314-3.459-.139-6.994 2.082-7.587 7.123l-.012.082-.43-.458c-2.345-2.385-5.512-3.888-8.128-5.968-2.685-2.134-5.172-4.566-7.466-7.11-4.287-4.758-7.809-10.302-10.747-15.982-6.004-11.608-7.849-23.925-9.33-36.658l-.292-2.553c-.186-1.635-2.372-2.574-3.32-.899-7.682 13.587-5.878 31.646-.252 45.672 3.074 7.664 7.268 14.444 12.638 20.723 4.964 5.804 12.584 13.9 20.281 15.57 1.8.391 3.438.18 4.817-.438-9.62 37.416-42.33 66.775-79.458 76.196-47.19 11.975-96.06-4.859-131.953-36.07-17.617-15.318-32.233-33.8-46.087-52.54l-1.765-2.395c.121.057.258.097.416.111 20.478 1.731 39.493-6.38 55.44-18.87 16.963-13.286 27.833-31.729 34.66-51.948zm-93.46 57.87c-3.93-.443-7.897-.89-11.805-.72-5.034.22-10.05.54-15.06 1.1-9.289 1.04-18.94 3.566-27.812 6.47-18.979 6.214-36.925 15.003-53.765 25.707-34.446 21.894-63.836 51.086-88.714 83.276-27.64 35.761-50.266 75.312-67.796 116.944-8.755 20.795-16.236 42.11-22.286 63.85a502.049 502.049 0 0 0-4.22 16.152l-.116.472a196.31 196.31 0 0 1-.576 2.233c-1.251 4.771-2.599 9.91-1.46 14.663 1.182 4.941 4.844 8.29 9.09 10.73 5.352 3.077 11.045 5.693 16.55 8.481 3.105 1.572 6.22 3.137 9.346 4.691-8.026 25.123-11.968 51.796-15.558 77.877l-1.923 14.03c-4.925 36.341-8.693 72.831-10.58 109.467a1718.803 1718.803 0 0 0-1.774 47.182 161.43 161.43 0 0 1-.069 2.086c-.205 5.521-.407 10.957 4.059 15.07 3.756 3.458 8.882 3.283 12.677 0 3.736-3.233 4.187-7.346 4.3-11.787l.137-7.008a1707.264 1707.264 0 0 1 1.187-36.7c.805-18.662 1.728-37.322 2.996-55.959 2.51-36.9 5.866-73.672 9.67-110.458 1.364-13.182 2.772-26.395 3.355-39.632 40.278 19.558 82.498 36.297 127.691 37.754-1.33 14.568-2.622 29.137-3.818 43.72-3.375 41.112-7.024 82.195-10.196 123.326-.868 11.27-1.715 22.54-2.504 33.816-.247 3.525-.552 7.065-.858 10.611-.724 8.395-1.452 16.83-1.414 25.193.021 4.511 3.458 8.446 7.926 8.978 4.038.48 9.37-1.996 10.03-6.548 2.956-20.423 3.375-41.51 4.67-62.104 1.293-20.552 2.725-41.1 3.833-61.664 2.213-41.106 4.703-82.205 6.578-123.327 1.06-23.218 2.03-46.509-1.006-69.62-.122-.932-1.457-1.286-1.75-.237-5.448 19.522-7.944 39.77-9.846 59.911l-.334 3.643c-42.66-1.09-83.168-16.85-121.079-35.436l-2.317-1.14c-1.487-.735-16.306-8.273-25.203-12.858l-4.561-2.365c-1.351-.708-4.26-1.549-5.007-2.91-.66-1.202.134-3.813.683-5.617.155-.508.29-.952.368-1.282a554.65 554.65 0 0 1 3.83-15.347 525.976 525.976 0 0 1 20.525-61.653c29.83-74.02 77.1-145.515 142.411-192.736 16.961-12.263 35.39-22.937 54.794-30.845 9.736-3.968 19.498-7.037 29.555-10.012l3.82-1.13c8.917-2.636 17.9-5.23 26.98-7.128.497-.104.33-.786-.113-.829a254.463 254.463 0 0 1-3.542-.382z"
      fillRule="evenodd"
    />
    <path
      d="M630.53 304.003c-2.154-18.915.632-58.451.819-60.853 1.18-15.185-5.935-75.148-19.385-69.623-22.563-17.861-52.613-21.805-80.713-23.69-58.367-3.913-120.46 5.072-165.53 44.352-22.289 20.399-43.988 50.068-42.244 80.96-20.25 29.282-48.8 69.449-23.568 103.682 8.576 10.937 22.208 15.01 32.982 23.293 21.672 17.48 35.268 42.566 57.145 59.942 57.96 52.083 156.377 62.963 213.324 3.723 44.034-42.904 36.914-107.09 29.17-161.786-5.208-36.773 2.198 36.901-2 0z"
      fill="none"
    />
    <path
      d="M500.86 65.105c-15.941-.59-31.97 1.37-47.58 4.52-30.981 6.24-62.71 16.45-90.77 31.09-11.783 6.15-22.653 13.745-32.456 22.494-8.861-4.237-22.84-4.58-25.68 5.135-.816 2.79-.41 5.317.76 7.48-.341.193-.678.401-1.008.622-2.235 1.497-3.428 2.586-4.812 3.96l-1.093 1.096c-3.46 3.471-3.787 9.894 0 13.321l.518.468.319.278c.645.542 1.337 1 2.06 1.38-13.271 20.339-22.279 43.517-26.008 67.737-2.191 14.22-2.83 28.44-1.18 42.75.8 6.99 2 14.45 4.449 21.06 1.191 3.23 2.87 6.37 4.38 9.47 1.641 3.38 4.33 5.85 6.54 8.87.24.31.62.47.99.48a72.666 72.666 0 0 0-1.849 4.17c-3.271 7.99-5.79 16.6-7.25 25.11-2.75 16.05-1.07 34.1 11.149 46.11 4.87 4.78 12.41 8.61 19.821 9.63-2.371 2.44-4.281 5.34-5.81 8.68-2.86 6.23 1.909 14.66 9.489 12.34 1.441-.44 2.87-1 4.271-1.62 2.179 4.33 6.84 7.26 11.84 6.51 2.91-.44 5.01-1.57 6.45-3.16 3.61 7.98 8.399 15.23 14.47 21.63 6.419 6.78 13.51 12.89 19.91 19.69 6.22 6.6 9.91 15.22 17.24 20.66 2.279 1.69 5.77-.11 6.41-2.61 2.485-9.73-4.208-17.83-10.558-24.52l-.802-.84c-6.81-7.08-14.68-12.99-21.93-19.59-7.53-6.86-13.591-14.14-19.05-22.74-.473-.74-.943-1.495-1.415-2.258l-2.145-3.482c-.111-.51-.231-1.01-.37-1.5-.111-1.97-.77-3.84-2.04-5.56-1.571-2.13-3.67-3.74-6.01-4.49-.79-.84-1.611-1.64-2.47-2.38 1.07-1.17 2.01-2.55 2.81-4.15 1.48-2.98-.25-7.72-4.21-7.33-1.19.114-2.358.06-3.526.006-1.277-.06-2.553-.118-3.854.044-.312.039-.623.08-.934.12-2.137.284-4.27.566-6.427.27-4.429-.63-8.399-3.03-11.279-6.39-7.211-8.4-7.971-20.48-6.461-30.96.667-4.68 1.808-9.277 3.02-13.85l1.874-7.004c1.067-3.914 2.354-7.97 4.867-11.156 7.886-10.001 21.398-2.153 29.485 3.867l.735.553c.07.05.13.07.2.07.43.7.89 1.39 1.37 2.05 2.649 3.58 5.859 6.76 9.17 9.76l.675.616c.453.409.911.814 1.365 1.214 3.87 3.41 9.11.9 9.62-3.98.949-9.2.69-18.5 1.279-27.74.59-9.25 1.651-18.47 3.231-27.6 1.58-9.12 3.62-18.15 6.11-27.05 1.25-4.46 2.62-8.87 4.079-13.26 1.111-3.38 1.941-8.86 4.87-11.21 2.651-2.14 7.641-2.5 10.891-3.19 4.54-.97 9.109-1.83 13.659-2.8 8.511-1.83 17.011-3.82 25.391-6.18 8.3-2.34 16.53-5.1 24.5-8.42-2.29 3.84-4.56 7.69-6.81 11.55-3.08 5.29.959 10.94 6.55 11.41 5.74.48 11.55.05 17.149-1.31 1.191-.29 2.281-.62 3.291-1.01 6.15-.441 12.425-1.844 18.203-3.268l2.697-.672c10.979-2.76 21.529-6.53 31.93-10.98a284.927 284.927 0 0 0 3.497-1.523 137.059 137.059 0 0 0 12.73-4.536c15.444 2.337 31.198 1.43 46.372-2.301 6.551-1.61 13.671-3.63 20.441-6.43 3.37 5.75 8.54 10.41 14.309 13.79.631 4.99.981 10.03 1.211 15.03.739 15.94 1.579 31.88 2.449 47.81l.28 5.158c1.645 30.957 2.653 61.963 2.89 92.952.221 28.24-1.509 56.12-16.809 80.68-12.89 20.72-33 37.21-56.35 44.61-14.34 4.54-29.54 6-44.51 4.55-7.31-.71-14.55-2.38-21.541-4.62l-1.005-.317c-7.019-2.166-13.703-3.236-21.024-4.123-4.841-.59-6.011 5.69-3.58 8.64 5.14 6.22 10.63 10.37 18.269 13.19 6.901 2.54 14.22 4.15 21.491 5.2 15 2.16 30.13 1.92 44.95-1.47 27.5-6.28 51.809-22.8 68.74-45.21 18.59-24.61 24.579-54.03 24.97-84.34.421-32.434-1.188-65.024-3.33-97.404l-.45-6.696c-.96-14.01-1.98-28.07-3.57-42.05 2.63.26 5.39-.56 7.63-2.81 4.364-4.364 5.397-11.081 5.916-17.147l.134-1.673c.42-5.59-.43-11.31-1.96-16.68-2.108-7.354-5.642-13.546-10.634-18.731 6.686-7.206 10.287-17.405 11.081-27.033.573-6.938 1.106-16.057-6.55-19.29-1.512-.639-3.077-.875-4.651-.842.404-2.47.677-4.972.83-7.503.245-4.024-3.884-8.435-8.017-8.019-1.256.127-2.512.262-3.768.393a219.086 219.086 0 0 1 2.279-3.585c3.254-4.977-1.144-10.526-6.283-10.95-13.659-1.13-27.179-3.93-40.21-8.174-13.093-4.264-26.769-8.555-39.203-14.49-.878-.419-1.846-.109-2.448.495-10.463-6.974-25.653-8.035-37.647-8.514l-1.229-.048zM323.99 329.033c-4.643-2.16-10.931-5.083-15.76-3.507-2.21.72-2.86 3.06-1.86 4.78h-.08l.207.33c.918 1.399 2.096 2.347 3.388 3.247l.604.413c-1.62 1.15-2.86 2.81-3.4 4.93-.869 3.37.54 7.51 3.74 9.2a9.853 9.853 0 0 0 4.12 1.11c2.046.09 3.752-.852 5.3-2.03l.46-.36c.681-.54 1.231-1.26 1.67-2.04 3.731 4.82 6.87 10.51 13.46 10.69 3.15.09 6.71-2.42 7.36-5.61.071-.31.13-.62.191-.92.61-2.99.17-6.49-2.28-8.63-4.92-4.28-10-8.33-15.97-11.07-.37-.17-.754-.35-1.15-.533z"
      fillRule="evenodd"
    />
    <path
      d="m577.63 238.473-1.437-.294c-1.69-.338-3.389-.195-4.882.412a7.448 7.448 0 0 0-3.631 3.13c-1.185 1.993-1.343 3.665-.793 5.875a6.908 6.908 0 0 0 2.573 3.918c1.284.977 2.91 1.547 4.6 1.746 7.794.915 15.47 2.63 22.932 5.064 3.496 1.14 6.796 2.686 10.066 4.29l2.82 1.388c2.599 1.272 5.285 2.497 8.679 3.387.267.07.53.136.792.198.941-.296 1.101-.654 1.3-.913l.081-.102c.242-.304.541-.77.258-2.941-7.405-15.36-27.721-21.889-43.358-25.158zm-97.042 4.357 1.877-.328c5.808-1.005 13.03-1.97 17.138 2.7 2.179 2.476 2.929 7.077 0 9.447-3.836 3.105-7.973 3.003-12.385 2.893-1.514-.037-3.06-.076-4.637.014a67.731 67.731 0 0 0-14.88 2.535c-10.751 3.073-19.512 8.683-28.695 14.843-1.205.808-2.435-.733-1.86-1.86 5.3-10.383 15.574-18.912 25.864-24.11 5.492-2.775 11.502-5.077 17.578-6.133zm-13.625 45.316c.835-10.356 16.607-12.708 18.176-2.46 1.405 9.18-.249 17.613-4.384 25.878-3.95 7.896-13.881 4.213-14.632-2.977-.742-7.102-.216-11.339.32-15.654.191-1.54.384-3.092.52-4.787zm129.242-8.32c-3.804-1.11-6.979.855-9.178 3.735a8.668 8.668 0 0 0-.647.987c-6.865 6.308-4.279 19.097 1.121 25.501 3.313 3.927 10.644 2.796 12.912-1.664 4.174-8.213 7.677-25.086-4.208-28.559zm-30.457 77.213c8.124-11.379-3.382-22.082-10.934-26.672-1.978-1.42-.408-6.124 3.82-5.397 38.397 6.597 18.502 72.738-30.522 36.443-5.837-4.709 1.231-15.079 7.522-11.047.32.245.654.503 1.002.773 7.068 5.464 20 15.462 29.112 5.9zm-35.161 69.887c-6.723-2.742-12.72-7.316-17.106-13.16-1.524-2.03-1.92-4.177-1.6-6.139.36-2.206 1.665-4.205 3.445-5.547 1.786-1.345 4.019-2.008 6.178-1.67 1.877.294 3.744 1.321 5.223 3.452l.308.426c2.607 3.527 6.005 6.42 9.875 8.286 3.731 1.798 7.904 2.637 12.222 2.15 8.224-.93 13.892-5.378 19.917-11.418.747-.762 1.494-1.549 2.245-2.348a3.528 3.528 0 0 1 1.863-1.434 4.003 4.003 0 0 1 2.569.038 4.074 4.074 0 0 1 2.021 1.532c.462.678.724 1.516.639 2.48-.55 6.26-3.824 11.845-8.472 16.231-5.162 4.872-12.005 8.242-18.448 9.424-7.098 1.302-14.33.37-20.88-2.303z"
      fillRule="evenodd"
    />
    <path
      d="M670.241 273.471c6.314-2.99 13.571-2.81 20.362-1.923 13.746 6.378-15.742 13.766-19.254 6.98 3.452 25.443-6.414 67.361-34.625 80.605-32.594 15.937-67.95-8.305-66.668-47.155-6.989-1.697-2.13-21.265.683-29.214-12.292-1.912-24-3.039-35.845.715 6.526 18.406-16.707 73.809-39.04 84.846-17.313 11.958-56.358 6.626-71.91-11.96-11.1-14.195-16.644-47.137-10.502-70.027-.054-.024-.11-.042-.163-.069-.367 3.6-25.223 3.2-23.98-2.966-35.704.641-70.272 6.117-105.613 9.977-4.268.397-4.477 3.423-4.681 6.38-.175 2.533-.346 5.015-3.06 5.751-10.467.25-5.718-18.048 3.502-19.746 8.804-.92 17.67-2.115 26.564-3.314 28.111-3.79 56.516-7.62 84.221-2.923 3.88-4.929 10.868-3.176 16.563-1.747 1.603.402 3.103.778 4.403.972 4.704-27.763 80.397-26.112 105.48-14.848 26.774-3.08 54.631-4.844 81.183-7.08 16.812-5.392 36.39-8.174 53.884-2.916 2.421-.133 2.694.253 3.233 1.014.096.134.2.28.325.437 6.891 3.04 12.994 9.948 14.938 18.211zm-9.15 30.811c-9.535 64.49-76.089 71.622-87.914 7.6 1.898-.832 3.263-2.468 2.978-5.644-.067-13.952 4.264-28.698 16.85-36.457 13.006-8.006 28.227-8.8 43.278-8.598 28.722-.684 28.118 23.323 24.807 43.1zm-126.826-22.617c8.075-5.492 19.48-5.81 28.493-5.43 3.103.182 7.301.036 10.232 1.6 3.16-6.186 8.02-11.536 13.243-15.097-3.04.231-6.092.47-9.148.711-18.878 1.485-37.993 2.988-56.636 2.442 5.828 3.413 11.596 9.796 13.816 15.774zm-11.239 29.454c-24.995 86.037-87.386 48.537-94.188 37.51-12.269-18.246-14.577-62.6-3.89-74.459 12.521-8.777 29.303-8.521 44.892-8.283 3.457.052 6.855.104 10.135.056 33.201.448 56.781 10.38 43.051 45.176z"
      fillRule="evenodd"
    />
  </svg>
);
