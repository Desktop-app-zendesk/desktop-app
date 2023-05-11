import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Avatar } from '@material-tailwind/react';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';

function TicketConversation() {
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const [showEmojiContainer, setShowEmojiContainer] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [fileUrls, setFileUrls] = useState<string[]>([]);

  const handleFileUpload = (event: any) => {
    const fileList = event.target.files;
    const newFiles = Array.from<File>(fileList);
    setFiles([...files, ...newFiles]);
    const newFileUrls = Array.from<File>(fileList).map((file) =>
      URL.createObjectURL(file)
    );

    setFileUrls([...fileUrls, ...newFileUrls]);
  };

  const handleCancelFile = (index: any) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
    const newFileUrls = [...fileUrls];
    URL.revokeObjectURL(newFileUrls[index]);
    newFileUrls.splice(index, 1);
    setFileUrls(newFileUrls);
  };

  const formatFileSize = (size: any) => {
    if (size < 1024) {
      return `${size} bytes`;
    }
    if (size < 1024 * 1024) {
      return `${(size / 1024).toFixed(2)} KB`;
    }
    return `${(size / (1024 * 1024)).toFixed(2)} MB`;
  };

  const handleChange = (event: any) => {
    setText(event.target.value);
  };
  const handleEmojiSelect = (emoji: any) => {
    setText(text + emoji.native);
    setShowEmojiContainer(false);
  };
  return (
    <div>
      <div className="absolute z-10">
        {showEmojiContainer && (
          <Picker
            className="w-20 h-20"
            data={data}
            onEmojiSelect={handleEmojiSelect}
            perLine={7}
            emojiSize={20}
            maxFrequentRows={0}
          />
        )}
      </div>
      <div className="flex border-b border-solid border-zen-gray-200 p-2 h-[90px]">
        <div className="w-40">
          <Avatar
            src="../images/test.png"
            alt="avatar"
            variant="circular"
            size="sm"
            onClick={() => navigate('/')}
          />
        </div>
        <div className="flex flex-col flex-grow flex-shrink flex-0 overflow-y-scroll ">
          <div
            role="presentation"
            className="text-zen-blue-400 text-sm cursor-pointer pb-1"
            onClick={() => navigate('/')}
          >
            <strong>The Customer</strong>
          </div>
          <div>
            <div className="text-sm max-h-20">
              <p>Hi there,</p>

              <p>
                I’m sending an email because I’m having a problem setting up
                your new product. Can you help me troubleshoot?
              </p>

              <p>
                Thanks,
                <br /> The Customer
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-solid border-zen-gray-200 p-1">
        <div className="flex">
          <div className="text-gray-800">To</div>
          <div className="flex justify-between w-full">
            <div className="inline-flex flex-nowrap items-center box-border border-0 max-w-full overflow-hidden align-middle no-underline whitespace-nowrap font-semibold text-sm rounded-full px-2 mr-1 min-w-30 text-gray-700 bg-gray-200">
              <img
                src="../images/test.png"
                alt="avatar"
                className="rounded-full w-4 h-4 mr-1"
              />
              <span className="mr-1">The Customer</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                aria-hidden="true"
                focusable="false"
                data-test-id="qa-email_ccs__email_label__edit"
                aria-label="Edit user"
                className="sc-1z0xs9s-4 juEjHa"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  d="M.5 11.5v-2L9.1.9c.2-.2.5-.2.7 0l1.3 1.3c.2.2.2.5 0 .7l-8.6 8.6h-2zm7-9l2 2"
                />
              </svg>
            </div>
            <button
              type="button"
              className="text-zen-green-800 hover:underline"
            >
              CC
            </button>
          </div>
        </div>
        <form>
          <div className="w-full">
            <div className="rounded-t-lg ">
              <textarea
                id="comment"
                rows={4}
                className="w-full h-[60px] max-h-[150px] px-0 text-md bg-transparent text-gray-900 outline-none overflow-y-scroll"
                value={text}
                onChange={handleChange}
              />
              {files.length > 0 && (
                <div>
                  {files.map((file, index) => (
                    <div
                      key={file.name}
                      className="flex items-center justify-between"
                    >
                      <div>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="0 0 12 12"
                            aria-hidden="true"
                            focusable="false"
                            className="sc-1ax60z6-0 hLudKG inline-block pr-2"
                          >
                            <path
                              fill="none"
                              stroke="#B552E2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M10.5 3.21V11c0 .28-.22.5-.5.5H2c-.28 0-.5-.22-.5-.5V1c0-.28.22-.5.5-.5h5.79c.13 0 .26.05.35.15l2.21 2.21c.1.09.15.21.15.35zM7.5.5V3c0 .28.22.5.5.5h2.5m-7 6L5 8l1.5 1.5 1-1 1 1"
                            />
                            <circle cx="8" cy="6" r="1" fill="currentColor" />
                          </svg>
                        </span>
                        <a
                          href={fileUrls[index]}
                          download={file.name}
                          className="text-sm"
                        >
                          {`${file.name} (${formatFileSize(file.size)})`}
                        </a>
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          viewBox="0 0 12 12"
                          aria-hidden="true"
                          focusable="false"
                          data-garden-id="buttons.icon"
                          data-garden-version="8.63.2"
                          className="StyledIcon-sc-19meqgg-0 cqORhS sc-15vjzlm-7 kcQcZk px-2"
                          onClick={() => handleCancelFile(index)}
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            d="M3 9l6-6m0 6L3 3"
                          />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="flex items-center relative pr-2 pt-1 pb-1">
              <div className="flex cursor-pointer p-1">
                <label htmlFor="attachment">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                    focusable="false"
                    data-garden-id="buttons.icon"
                    data-garden-version="8.63.2"
                    className="StyledIcon-sc-19meqgg-0 cqORhS"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      d="M9.5 4v7.7c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5V3C6.5 1.6 7.6.5 9 .5s2.5 1.1 2.5 2.5v9c0 1.9-1.6 3.5-3.5 3.5S4.5 13.9 4.5 12V4"
                    />
                  </svg>
                </label>
                <input
                  id="attachment"
                  className="hidden"
                  type="file"
                  multiple
                  onChange={handleFileUpload}
                />
              </div>

              <span>
                <button
                  type="button"
                  onClick={() => setShowEmojiContainer(!showEmojiContainer)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                    focusable="false"
                    data-garden-id="buttons.icon"
                    data-garden-version="8.63.2"
                    className="StyledIcon-sc-19meqgg-0 cqORhS"
                  >
                    <g fill="none" stroke="currentColor">
                      <circle cx="8" cy="8" r="7.5" />
                      <path
                        strokeLinecap="round"
                        d="M4 9c.4 1.7 2.1 3 4 3s3.6-1.3 4-3"
                      />
                    </g>
                    <g fill="currentColor">
                      <circle cx="6" cy="6" r="1" />
                      <circle cx="10" cy="6" r="1" />
                    </g>
                  </svg>
                </button>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default TicketConversation;
