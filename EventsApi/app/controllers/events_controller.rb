class EventsController < ApplicationController

      def index
        @events= Event.all
        render json:@events
       end

        def create

          @event= Event.new(event_params)
          if @event.save
            render json: @event
          end
         end

         private
          def event_params
            params.require(:event).permit(:name,:city,:date)
          end

end
